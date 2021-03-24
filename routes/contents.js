const express = require('express');

const {
    getAllContents,
    getContentById,
    createContent,
    updateContent,
    deleteContent,
    getContentByShortName
} = require('../controller/contents');

const router = express.Router();

router
    .route('/')
    .get(getAllContents)
    .post(createContent);

router
    .route('/:id')
    .get(getContentById)
    .put(updateContent)
    .delete(deleteContent);

router
    .route('/search/:name')
    .get(getContentByShortName);

module.exports = router;
