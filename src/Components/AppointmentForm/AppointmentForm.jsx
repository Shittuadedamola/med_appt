import React, { useState } from 'react';

const AppointmentForm = ({
  doctorName,
  doctorSpeciality,
  onSubmit
}) => {

  const [name, setName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [appointmentDate, setAppointmentDate] = useState('');

  const [selectedSlot, setSelectedSlot] = useState('');

  const [error, setError] = useState('');

  // Available time slots
  const slots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '4:00 PM'
  ];

  const handleFormSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      !name ||
      !phoneNumber ||
      !appointmentDate ||
      !selectedSlot
    ) {
      setError('Please fill all fields');
      return;
    }

    // Submit appointment data
    onSubmit({
      name,
      phoneNumber,
      appointmentDate,
      selectedSlot
    });

    // Clear form
    setName('');
    setPhoneNumber('');
    setAppointmentDate('');
    setSelectedSlot('');
    setError('');
  };

  return (

    <form
      onSubmit={handleFormSubmit}
      className="appointment-form"
    >

      <h2>Book Appointment</h2>

      <p>
        <strong>Doctor:</strong> Dr. {doctorName}
      </p>

      <p>
        <strong>Speciality:</strong> {doctorSpeciality}
      </p>

      {/* Patient Name */}
      <div className="form-group">

        <label htmlFor="name">
          Patient Name
        </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

      </div>

      {/* Phone Number */}
      <div className="form-group">

        <label htmlFor="phoneNumber">
          Phone Number
        </label>

        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          required
        />

      </div>

      {/* Appointment Date */}
      <div className="form-group">

        <label htmlFor="appointmentDate">
          Appointment Date
        </label>

        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

      </div>

      {/* Time Slot Dropdown */}
      <div className="form-group">

        <label htmlFor="slot">
          Select Time Slot
        </label>

        <select
          id="slot"
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          required
        >

          <option value="">
            -- Select Time Slot --
          </option>

          {
            slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))
          }

        </select>

      </div>

      {/* Error Message */}
      {
        error && (
          <p style={{ color: 'red' }}>
            {error}
          </p>
        )
      }

      {/* Submit Button */}
      <button type="submit">
        Book Now
      </button>

    </form>
  );
};

export default AppointmentForm;