const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    body: {
        type: 'string',
        required: true
    },
    bodySlug: {
        type: 'string'
    },
    contentSets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contentSet',
        default: []
    }],
    author: {
        type: 'string'
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Blog', BlogSchema);
