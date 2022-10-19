//controller for paths related to books
const axios = require('axios');
const uuid = require('uuid');
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
