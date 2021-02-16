const express = require('express');

const {
    getAllContents,
    getContentById,
    createContent,
    updateContent,
    deleteContent
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

module.exports = router;
