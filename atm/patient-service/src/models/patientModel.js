const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  medicalHistory: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model from the schema
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;

