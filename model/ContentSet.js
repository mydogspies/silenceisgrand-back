const mongoose = require('mongoose');

const ContentSetSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    contentList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
        default: []
    }],
    description: {
        type: 'string'
    }
});

module.exports = mongoose.model('ContentSet', ContentSetSchema);
