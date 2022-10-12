// routes pertaining to signing up and logging in

const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

//sign up new user
//TODO: add validation middleware to make sure password is acceptable
router.post('/signup', controller.postSignup);

module.exports = router;