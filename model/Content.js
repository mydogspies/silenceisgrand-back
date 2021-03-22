const mongoose = require('mongoose');

const FileTypes = Object.freeze({
    PNG: 'png',
    JPG: 'jpg',
    GIF: 'gif',
    SVG: 'svg',
    MP3: 'mp3',
    MP4: 'mp4'
});

const ContentSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    fileName: {
        type: 'string',
        contentType: String,
        required: true
    },
    fileType: {
        type: 'string',
        enum: Object.values(FileTypes),
        required: true
    },
    description: {
        type: 'string',
        default: ''
    }
});

Object.assign(ContentSchema.statics, {
    FileTypes
});

module.exports = mongoose.model('Content', ContentSchema);
