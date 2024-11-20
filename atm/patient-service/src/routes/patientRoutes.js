const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to create a patient
router.post('/patients', patientController.createPatient);

// Route to get all patients
router.get('/patients', patientController.getPatients);

// Route to get a patient by ID
router.get('/patients/:id', patientController.getPatientById);

// Route to update a patient
router.put('/patients/:id', patientController.updatePatient);

// Route to delete a patient
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;
