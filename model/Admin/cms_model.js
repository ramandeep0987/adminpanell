const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
  
 question: {type: String},
  options: { type: String },
  correct:{type: String}
  
}, {timestamps:true});

module.exports = mongoose.model('cms', cmsSchema);