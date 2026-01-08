const mongoose = require('mongoose');

const toolsSchema = new mongoose.Schema({

  question: {type: String},
  answer: {type: String },
  deleted: {type: Boolean, default: false},

}, {timestamps:true});

module.exports = mongoose.model('tools', toolsSchema);