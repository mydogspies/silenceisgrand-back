const express = require('express');

const {
    getAllDevTests,
    getDevTestById,
    createDevTest,
    updateDevTest,
    deleteDevTest
} = require('../controller/devtests');

const router = express.Router();

router
    .route('/')
    .get(getAllDevTests)
    .post(createDevTest);

router
    .route('/:id')
    .get(getDevTestById)
    .put(updateDevTest)
    .delete(deleteDevTest);

module.exports = router;
