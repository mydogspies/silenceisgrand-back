const mongoose = require('mongoose');

const BlogSetSchema = new mongoose.Schema ({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    blogList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
        default: []
    },
    description: {
        type: 'string'
    }

});

module.exports = mongoose.model('BlogSet', BlogSetSchema);
