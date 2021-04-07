const mongoose = require('mongoose');

const ContentSetSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    location: {
        type: 'string',
        required: true
    },
    contentList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
        default: []
    }],
    description: {
        type: 'string'
    },
    viewName: {
        type: 'string'
    }
});

module.exports = mongoose.model('ContentSet', ContentSetSchema);
