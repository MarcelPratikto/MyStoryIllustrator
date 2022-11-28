//controller for paths related to books
const axios = require('axios');
const uuid = require('uuid');
const { validationResult } = require("express-validator");
const Book = require('../models/book');
const Spread = require('../models/spread');

// save a new story to a user
// request should include a userId, title, author
exports.postSaveBook = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const author = req.body.author;

    let spreads
    if (req.body.spreads) {
        spreads = req.body.spreads.map(spread => {
            return {
                SpreadNumber: spread.spread,
                ImageUrl: spread.imageUrl,
                Text: spread.text,
                Caption: spread.caption
            }
        })

    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("Validation failed.");
        error.data = errors.array();
        return res.status(422).json({
            message: "Could not save book.",
            error: errors.errors
        });
    }
    Book.create({
        Title: title,
        Author: author,
        UserId: userId,
        Spreads: spreads || []
    }, {
        include: [Spread],
        as: 'Spreads'
    })
        .then(result => {
            return res.status(201).json({
                message: `Book created.`,
                id: result.Id,
            })
        })
        .catch(err => {
            console.log(err)
            res.status(422).json({
                message: "Could not create book.",
                error: err
            })
        });
}

// to edit a story, should include:
// bookId
//title, author
//spreads:
// spread should have:
// id, spreadNumber, imageUrl, text, caption
exports.putUpdateBook = (req, res) => {
    const bookId = req.body.id;
    const title = req.body.title;
    const author = req.body.author;
    const spreads = req.body.spreads.map(spread => {
        return {
            SpreadNumber: spread.spreadNumber || null,
            ImageURL: spread.imageUrl || "",
            Text: spread.text || "",
            Caption: spread.caption || "",
            BookId: bookId
        }
    })
    //save book
    Book.findOne({
        where: {
            Id: bookId
        },
        include: {
            model: Spread,
        }
    }).then(oldBook => {

        oldBook.Title = title;
        oldBook.Author = author;
        oldBook.save()
            .then(book => {
                //save spreads
                //lookup by book id and spread number, if it exists, update the spread, else create it
                let newSpreads = [];
                let queries = [];
                let updates = [];
                spreads.forEach(spread => {
                    let query = Spread.findOne({
                        where: {
                            BookId: bookId,
                            SpreadNumber: spread.SpreadNumber
                        }
                    }).then(existingSpread => {
                        if (!existingSpread) {
                            let update = Spread.create(spread).then(newSpread => {
                                newSpreads.push(newSpread)
                            })
                            //     .catch(err => {
                            //     res.status(422).json({
                            //         message: "One or more errors occured.",
                            //         error: err
                            //     })
                            // });
                            updates.push(update)
                        }
                        else {
                            let update = Spread.update(spread, {
                                where: {
                                    BookId: bookId,
                                    SpreadNumber: spread.SpreadNumber
                                }
                            }).then(newSpread => {
                                newSpreads.push(spread)
                            })
                            //     .catch(err => {
                            //     res.status(422).json({
                            //         message: "One or more errors occured.",
                            //         error: err
                            //     })
                            // });
                            updates.push(update)
                        }
                    })
                        // .catch(err => {
                        //     res.status(422).json({
                        //         message: "One or more errors occured.",
                        //         error: err
                        //     })
                        // });
                    queries.push(query)
                })
                //run this code after all updates have been made
                Promise.all(queries).then(results => {
                    Promise.all(updates).then(results => {
                        return res.status(201).json({
                            message: `Book updated`,
                            book: {
                                id: bookId,
                                title: book.Title,
                                author: book.Author,
                                userId: book.UserId,
                                spreads: newSpreads
                            }
                        })

                    })
                })

            })
            // .catch(err => {
            //     console.log(err)
            //     res.status(422).json({
            //         message: "One or more errors occured.",
            //         error: err
            //     })
            // });
    })
        // .catch(err => {
        //     res.status(422).json({
        //         message: "One or more errors occured.",
        //         error: err
        //     })
        // });

}


exports.getBook = (req, res) => {
    const bookId = req.body.bookId;
    Book.findOne({
        where: {
            Id: bookId
        }
    }).then(book => {

        res.status(200).json({
            Book: book
        })


    }).catch(err => {
        res.status(422).json({
            message: "getBooks controller error.",
            error: err
        })
    });


}

exports.getAllBooks = (req, res) => {
    const userId = req.body.userId;
    Book.findAll({
        where: {
            UserId: userId
        },
        include: [
            {model: Spread }  
        ]
    }).then(books => {
        res.status(200).json({
            books: books.map(book => {
                return {
                    id: book.Id,
                    title: book.Title,
                    author: book.Author,
                    userId: book.UserId,
                    createdAt: book.createdAt,
                    updatedAt: book.updatedAt,
                    spreads: book.Spreads.map(spread => {
                        return {
                            spreadNumber: spread.SpreadNumber,
                            bookId: spread.BookId,
                            imageUrl: spread.ImageURL,
                            text: spread.Text,
                            caption: spread.Caption,
                            createdAt: spread.createdAt,
                            updatedAt: spread.updatedAt
                        }
                    })
                }
            })
        })


    })
        .catch(err => {
        res.status(422).json({
            message: "getAllBooks controller error.",
            error: err
        })
    });


}



// add other books controllers here:

// Deletes a book
// INPUT int bookId
exports.deleteBook = (req, res) => {
    //console.log(req.body)
    const bookId = req.body.bookId;
    Book.destroy({
        where: {
            Id: bookId
        }
    })
        .then(result => {
            res.status(200).json({
                message: `Book deleted.`,
                id: result.id
            })
        })
        .catch(err => {
            res.status(422).json({
                message: "deleteBooks controller error.",
                error: err
            })
        });
}

//This endpoint should receive a username and a prompt, and the art style
exports.generateImage = (req, res, next) => {
    const BASEURL = "http://weylin.ddns.net";
    const API_KEY = process.env.API_KEY;
    const QUALITY = 2;

    //TODO: add error handling. If there is not username, throw an error. If there is no style, omit it from the url
    const prompt = req.body.prompt;
    const folder = req.body.username;
    const style = req.body.style;

    const filename = uuid.v1();
    const text = `${prompt} in the style of ${style}`;

    axios.get(`${BASEURL}/generate-image/?text=${text}&quality=${QUALITY}&directory=${folder}&filename=${filename}`, {
        headers: {
            "Authorization": API_KEY
        }
    })
        .then(response => {
            console.log(response)
            res.status(200).json({
                imageUrl: `${BASEURL}/${response.data.file_path}`
            })
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).json({
                message: "The image could not be retrieved",
                error: error
            })
        })

}
