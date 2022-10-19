//controller for paths related to books
const { validationResult } = require("express-validator");
const Book = require('../models/book');

// save a new story to a user
// request should include a userId, title, author
exports.postSaveBook = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const author = req.body.author;
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
                UserId: userId
            }).then(result => {
                res.status(201).json({
                    message: 'Book created',
                    id: result.id
                })
            }).catch(err => {
                res.status(422).json({
                    message: "One or more errors occured.",
                    error: err
                })
            });
}

exports.postGetBook = (req, res) => {
    const userId = req.body.userId;
    book.findall({ where: {Id: userId}}).then(book)=> { 
        res.send(book)}

    
    // id is the key value that you want to find, what should the input be? 
}
// add other books controllers here:
