const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

  name: { type: String },
  
  mrdnumber: { type: String },
  date: { type: String },
  number: { type: String },
  doctorComplaint: { type: String },

   floor: {
    type: String,
   
  },
      wardRoom: {        
    type: String,
   
  },
 Patientlocation: {
    type: String,
    
  },


  hospitalservices: { type: String },
  servicesimprovements :{type: String},

  issue: { type: String },
  roomFacility: { type: String },
  roomReason:{type:String},
  OverallExperience:{type:String},
  remark:{type:String},
  
  

  
  
 

  deleted: {type: Boolean, default: false},

}, {timestamps:true});

module.exports = mongoose.model('ipd', categorySchema);