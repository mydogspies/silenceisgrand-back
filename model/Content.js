const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    data: {
        type: 'buffer',
        contentType: String,
        default: null
    },
    description: {
        type: 'string',
    }
});

module.exports = mongoose.model('Content', ContentSchema);
