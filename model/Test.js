const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema ({
    name: {
        type: 'string'
    },
    message: {
        type: 'string'
    }
});

module.exports = mongoose.model('Test', TestSchema);
