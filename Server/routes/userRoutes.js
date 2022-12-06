// routes pertaining to signing up and logging in

const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
const { body, validationResult } = require("express-validator");

//sign up new user
//TODO: add validation middleware to make sure password is acceptable
router.post('/signup',
    body("password").isLength({min: 6}),
    controller.postSignup
);

router.post('/login', controller.postLogin);

module.exports = router;