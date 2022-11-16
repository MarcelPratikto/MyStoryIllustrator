//controller for paths related to books
const axios = require('axios');
const uuid = require('uuid');
const { validationResult } = require("express-validator");
const Book = require('../models/book');
const Page = require('../models/page');

// save a new story to a user
// request should include a userId, title, author
exports.postSaveBook = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const author = req.body.author;

    let pages
    if (req.body.pages) {
        pages = req.body.pages.map(page => {
            return {
                PageNumber: page.pageNumber,
                ImageUrl: page.imageUrl,
                Text: page.text,
                Caption: page.caption
            }
        })

    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("Validation failed.");
        error.data = errors.array();
        return res.status(422).json({
            message: "One or more errors occured.",
            error: errors.errors
        });
    }
    Book.create({
        Title: title,
        Author: author,
        UserId: userId,
        Pages: pages || []
    }, {
        include: [Page],
        as: 'Pages'
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
                message: "One or more errors occured.",
                error: err
            })
        });
}

// to edit a story, should include:
// bookId
//title, author
//pages:
// page should have:
// id, pageNumber, imageUrl, text, caption
exports.putUpdateBook = (req, res) => {
    const bookId = req.body.bookId;
    const title = req.body.title;
    const author = req.body.author;
    const pages = req.body.pages.map(page => {
        return {
            PageNumber: page.pageNumber || null,
            ImageURL: page.imageUrl || "",
            Text: page.text || "",
            Caption: page.caption || "",
            BookId: bookId
        }
    })
    //save book
    Book.findOne({
        where: {
            Id: bookId
        },
        include: {
            model: Page,
        }
    }).then(oldBook => {

        oldBook.Title = title;
        oldBook.Author = author;
        oldBook.save()
            .then(book => {
                //save pages
                //lookup by book id and pagenumber, if it exists, update the page, else create it
                let newPages = [];
                let queries = [];
                let updates = [];
                pages.forEach(page => {
                    let query = Page.findOne({
                        where: {
                            BookId: bookId,
                            PageNumber: page.PageNumber
                        }
                    }).then(existingPage => {
                        if (!existingPage) {
                            let update = Page.create(page).then(newPage => {
                                newPages.push(newPage)
                            }).catch(err => {
                                res.status(422).json({
                                    message: "One or more errors occured.",
                                    error: err
                                })
                            });
                            updates.push(update)
                        }
                        else {
                            let update = Page.update(page, {
                                where: {
                                    BookId: bookId,
                                    PageNumber: page.PageNumber
                                }
                            }).then(newPage => {
                                newPages.push(page)
                            }).catch(err => {
                                res.status(422).json({
                                    message: "One or more errors occured.",
                                    error: err
                                })
                            });
                            updates.push(update)
                        }
                    })
                        .catch(err => {
                            res.status(422).json({
                                message: "One or more errors occured.",
                                error: err
                            })
                        });
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
                                pages: newPages
                            }
                        })

                    })
                })

            })
            .catch(err => {
                console.log(err)
                res.status(422).json({
                    message: "One or more errors occured.",
                    error: err
                })
            });
    })
        .catch(err => {
            res.status(422).json({
                message: "One or more errors occured.",
                error: err
            })
        });

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
            message: "One or more errors occured.",
            error: err
        })
    });


}

exports.getAllBooks = (req, res) => {
    const userId = req.body.userId;
    Book.findAll({
        where: {
            UserId: userId
        }
    }).then(books => {

        res.status(200).json({
            books: books.map(book => {
                return {
                    id: book.Id,
                    title: book.Title,
                    author: book.Author,
                    userId: book.userId,
                    createdAt: book.createdAt,
                    updatedAt: book.updatedAt
                }
            })
        })


    }).catch(err => {
        res.status(422).json({
            message: "One or more errors occured.",
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
                message: "One or more errors occured.",
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
