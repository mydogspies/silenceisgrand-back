const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// load env vars
dotenv.config({path: './config/config.env'});

// connect to db
connectDB();

// import the routes
const blogs = require('./routes/blogs');
const contents = require('./routes/contents');
const devtests = require('./routes/devtests');

// define express app
const app = express();

// use cors
app.use(cors());

// define body parser
app.use(express.json());

// http logging during development
if(process.env.NODE_ENV !== 'development') {
    app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/blogs', blogs);
app.use('/api/v1/contents', contents);
app.use('/api/v1/devtests', devtests);

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

