const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String
  },
  qualifications: [String],
  specialist: String,
  location: {
    address: String,
    city: String,
    state: String,
    zip: String
  },
  availability: [{
    clinicId: mongoose.Schema.Types.ObjectId,
    clinicName: String,
    open: String,
    close: String,
    days: [String],
    avail: {  
      type: Boolean,
      default: true
    }
  }],
  contact: {
    phone: String,
    email: String
  },
  description: String, 
  fees: Number 
});

module.exports = mongoose.model('Doctor', doctorSchema);
