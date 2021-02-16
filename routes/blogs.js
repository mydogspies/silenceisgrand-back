const express = require('express');

const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blogs');

const router = express.Router();

router
    .route('/')
    .get(getAllBlogs)
    .post(createBlog);

router
    .route('/:id')
    .get(getBlogById)
    .put(updateBlog)
    .delete(deleteBlog);

module.exports = router;
