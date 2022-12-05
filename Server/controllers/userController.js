const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//sign up a new user
//request should include username and password, and a confirm password field
exports.postSignup = (req, res, next) => {
    console.log('creating new user user')
    //get data out of request
    const username = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        if (errors.errors[0]["param"] === "password") {
            return res.status(422).json({
                message: "Password must have: 6 characters",
                error: "Password error"
            });
        }
        else {
            const error = new Error("Validation failed.");
            error.data = errors.array();
            return res.status(422).json({
                message: "Could not sign up.",
                error: errors.errors
            });
        }
    }

    bcrypt.hash(password, 7)
        .then(pw => {
            let user = User.build({
                Username: username,
                HashedPassword: pw
            });
            userObj = user
            return user.save();
        }).then(result => {
            res.status(201).json({
                message: `User created.`,
                id: result.Id
            })
        }).catch(err => { // makes sure that username must be unique when registering
            if (err["name"] === "SequelizeUniqueConstraintError"){
                return res.status(422).json({
                    message: err["errors"][0]["message"],
                    error: err["name"]
                })
            } else {
                return res.status(422).json({
                    message: "One or more errors occured.",
                    error: err
                })
            }
        })
}


// takes a username and a password
// returns success or error message
exports.postLogin = (req, res, next) => {
    console.log('logging in user')
    const error = [];
    const username = req.body.username;
    const password = req.body.password

    //allow user to stay logged in for one week (168 hours)
    const tokenExpiryTime = 168 * 60 * 60;
    let loadedUser;
    User.findOne({
        where: {
            Username: username
        }
    }).then(user => {
        if (!user) {
            error.push('no user with this username');
            return res.status(401).json({
                message: "No user found",
                error: err
            });
        }
        loadedUser = user;
        return bcrypt.compare(password, user.HashedPassword);
    }).then(passwordsMatch => {
        if (!passwordsMatch) {
            error.push('Incorrect pasword');
            return res.status(401).json({
                message: "Password is incorrect",
                error: err
            })
        }
        const token = jwt.sign(
            {
                username: loadedUser.Username,
                userId: loadedUser.Id
            },
            process.env.SECRET,
            { expiresIn: `${tokenExpiryTime}` }
        );
        res.status(200).json({
            message: `Login successful. Token valid for the next ${tokenExpiryTime} hours.`,
            token: token,
            userId: loadedUser.Id
        })
    })
        .catch(err => {
        res.status(422).json({
            message: "One or more errors occured.",
            error: err
        })
    })
}