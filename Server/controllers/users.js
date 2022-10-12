const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const sequelize = require("../util/database");

//sign up a new user
//request should include username and password
exports.postSignup = (req, res, next) => {
    //get data out of request
    const username = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);

    //TODO: check if user already exists


    // if (!errors.isEmpty()) {
    //     const error = new Error("Validation failed.");
    //     // error.statusCode = 422;
    //     error.data = errors.array();
    //     return res.status(422).json({
    //         message: "One or more errors occured.",
    //         error: errors.errors
    //     });
    // }

    try {
        bcrypt
            .hash(password, 7)
            .then(pw => {
                const user = User.build({
                    Username: username,
                    HashedPassword: pw
                });
                return user.save();
            }).then(result => {
                res.status(201).json({
                    message: 'User created',
                    id: result.id
                })
            }).catch(err => {
                res.status(422).json({
                    message: "One or more erros occured.",
                    error: err
                })
            })
    }
    catch (error) {
        return res.status(422).json({
            message: "One or more errors occured.",
            error: error
        })
    }


}