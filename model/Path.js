const mongoose = require('mongoose');

const PathType = Object.freeze({
    Images: 'images'
});

const PathSchema = new mongoose.Schema({

   pathType: {
      type: 'string',
      enum: Object.values(PathType),
      required: true
   },
   path : {
      type: 'string',
      required: true,
      unique: true
   },
   description: {
      type: 'string',
      default: ''
   }

});

Object.assign(PathSchema.statics, {
   PathType
});

module.exports = mongoose.model('Paths', PathSchema);

