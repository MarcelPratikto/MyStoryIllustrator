//set up env file
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

// at the top of the file, import required modules and libraries
const express = require('express');
const cors = require('cors');
const sequelize = require('./util/database');

const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes')

//initialize express app
var app = express();

//if the app is being hosted somewhere else, we might be using a different port. As a default we will use port 3000 when running the app locally
const PORT = process.env.PORT || 8080;

//enable CORS to allow anyone to access the app
app.use(cors());

//This tells the app to check userRoutes and bookRoutes middlewares
app.use(userRoutes);
app.use(bookRoutes);

// a default in case someone tries to call an invalid route
app.use('/', (req, res, next) => {
    res.status(400).json({
        message: 'Page Not Found',
    });
});

// start the app
const server = app.listen(PORT)
console.log(`running server on port ${PORT}`)

// connect to the database. The connection string is read from your .env file
// See docs here: https://sequelize.org/docs/v6/getting-started/

//testing the database connection
async function testDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }   
};

testDB();