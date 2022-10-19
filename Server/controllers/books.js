//controller for paths related to books
const sequelize = require('../util/database');
const book = require('../models/book');

// save a new story to a user
// request should include a userId and a story object
exports.postSaveBook = (req, res, next) => {
    const userId = req.body.userId;
    const book = req.body.book;

    (async () => {
        await sequelize.sync();
        
        const bookToSave = Book.build({
            Id: book.id,
            Title: book.title,
            Author: book.Author

        })

        await bookToSave.save();
      })();
}

exports.postGetBook = (req, res) => {
    const userId = req.body.userId;
    book.findall({ where: {Id: userId}}).then(book)=> { 
        res.send(book)}

    
    // id is the key value that you want to find, what should the input be? 
}
// add other books controllers here:
