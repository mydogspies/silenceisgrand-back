const mongoose = require('mongoose');

const DevTestSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    testString: {
        type: 'string'
    },
    testArray: {
        type: 'array',
    },
    description: {
        type: 'string'
    }

})

module.exports = mongoose.model('DevTest', DevTestSchema);
