
import React from 'react';
import AppointmentList from '../components/AppointmentList';

const appointments = [
  { date: '2024-11-21', description: 'Consultation with Dr. Smith' },
  { date: '2024-11-22', description: 'Follow-up with Dr. Johnson' },
];

const AppointmentPage = () => (
  <div>
    <h2>Appointments</h2>
    <AppointmentList appointments={appointments} />
  </div>
);

export default AppointmentPage;
