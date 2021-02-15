const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// load env vars
dotenv.config({path: './config/config.env'});

// connect to db
connectDB();

// route TEST files
const test = require('./routes/devtest'); // TODO only for dev!

// define express app
const app = express();

// define body parser
app.use(express.json());

// http logging during development
if(process.env.NODE_ENV !== 'development') {
    app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/test', test); // TODO only for dev!

// error handler
app.use(errorHandler);

// server start
const PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
);

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // close server and exit
    server.close(() => process.exit(1));
})

