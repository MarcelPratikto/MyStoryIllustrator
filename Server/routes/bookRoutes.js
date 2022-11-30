// routes pertaining to CRUD operations for storybooks.

const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const controller = require('../controllers/bookController');

//router.post means we are creating a resource
//First paramater is the path. Next parameters are middleware - stuff that runs next
router.post('/saveBook', isAuth, controller.postSaveBook);

router.get('/getBook/:id', isAuth, controller.getBook);

router.get('/getAllBooks', isAuth, controller.getAllBooks);

router.delete('/deleteBook', isAuth, controller.deleteBook);

router.post('/generateImage', isAuth, controller.generateImage);

router.put('/updateBook', isAuth, controller.putUpdateBook);


module.exports = router;