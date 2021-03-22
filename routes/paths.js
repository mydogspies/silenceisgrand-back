const express = require('express');

const {
    getAllPaths,
  //  getPathByType,
    createPath,
    updatePath,
    deletePath
} = require('../controller/paths');

const router = express.Router();

router
    .route('/')
    .get(getAllPaths)
    .post(createPath);

router
    .route('/:id')
    .put(updatePath)
    .delete(deletePath);

// TODO set up this route for Paths by type!
// router
//     .route('/:type')
//     .get(getPathByType);

module.exports = router;
