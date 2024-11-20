import React from 'react';

const AppointmentList = ({ appointments }) => (
  <ul>
    {appointments.map((appointment, index) => (
      <li key={index}>{appointment.date} - {appointment.description}</li>
    ))}
  </ul>
);

export default AppointmentList;

