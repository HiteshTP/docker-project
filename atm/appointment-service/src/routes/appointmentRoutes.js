const express = require('express');
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment
} = require('../controllers/appointmentController');

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.delete('/:id', deleteAppointment);

module.exports = router;

