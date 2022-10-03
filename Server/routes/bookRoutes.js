// routes pertaining to CRUD operations for storybooks.

const express = require('express');
const router = express.Router();
const cors = require('cors');

const controller = require('../controllers/books');

//router.post means we are creating a resource
//First paramater is the path. Next parameters are middleware - stuff that runs next
router.post('/saveBook', controller.postSaveBook);

// Put other story routes here.

module.exports = router;