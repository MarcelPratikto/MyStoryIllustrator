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
const bodyParser = require('body-parser')

//initialize express app
var app = express();

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//if the app is being hosted somewhere else, we might be using a different port. As a default we will use port 3000 when running the app locally
const PORT = process.env.PORT || 8080;


// fixing potential CORS blocking
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  app.use(cors(corsOptions));

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
        sequelize.sync().then().catch(err => {
            console.error();(err)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }   
};

testDB();