const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const db = require('./model/');

// load env vars
dotenv.config({path: './config/config.env'});

// test text 123456789012

// connect to db
db.sequelize.sync();

// import the routes
const blogs = require('./routes/blogs');
const contents = require('./routes/contents');
const status = require('./routes/status');

// define express app
const app = express();

const corsOptions = {
    origin: 'http://api.silenceisgrand.com',
    optionsSuccessStatus: 200
};

// use cors
app.use(cors(corsOptions));

// define body parser
app.use(express.json());

// http logging during development
if(process.env.NODE_ENV !== 'development') {
    app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/blogs', blogs);
app.use('/api/v1/contents', contents);
app.use('/api/v1/status', status);
// error handler
app.use(errorHandler);

// server start
const PORT = process.env.PORT || 5005;
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

