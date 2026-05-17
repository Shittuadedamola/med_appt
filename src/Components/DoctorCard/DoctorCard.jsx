import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const DoctorCard = ({
  name,
  speciality,
  experience,
  ratings,
  profile,
  image = "https://www.shutterstock.com/image-illustration/cute-cartoon-doctor-stethoscope-flat-600nw-2660180777.jpg"
}) => {

  const [showModal, setShowModal] = useState(false);

  const [appointments, setAppointments] = useState([]);

  // Cancel appointment
  const handleCancel = (appointmentId) => {

    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );

    setAppointments(updatedAppointments);
  };

  // Submit appointment form
  const handleFormSubmit = (appointmentData) => {

    const newAppointment = {
      id: Date.now(),
      ...appointmentData,
    };

    const updatedAppointments = [
      ...appointments,
      newAppointment
    ];

    setAppointments(updatedAppointments);

    setShowModal(false);
  };

  return (

    <div className="doctor-card-container">

      {/* Doctor Image */}
      <div className="doctor-card-image-container">

        {
          image ? (
            <img
              src={image}
              alt={name}
              className="doctor-card-image"
            />
          ) : (
            <i
              className="fa fa-user-md"
              style={{ fontSize: '80px' }}
            ></i>
          )
        }

      </div>

      {/* Doctor Details */}
      <div className="doctor-card-details">

        <h2 className="doctor-name">
          Dr. {name}
        </h2>

        <p className="doctor-speciality">
          <strong>Speciality:</strong> {speciality}
        </p>

        <p className="doctor-experience">
          <strong>Experience:</strong> {experience} years
        </p>

        <p className="doctor-ratings">
          <strong>Ratings:</strong> {ratings}
        </p>

        <p className="doctor-profile">
          <strong>Career Profile:</strong> {profile}
        </p>

      </div>

      {/* Popup Appointment Section */}
      <div className="doctor-card-options-container">

        <Popup
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
          trigger={
            <button
              className={`book-appointment-btn ${
                appointments.length > 0 ? 'cancel-appointment' : ''
              }`}
              onClick={() => setShowModal(true)}
            >
              {appointments.length > 0 ? (
                <div>Manage Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}

              <div>No Booking Fee</div>
            </button>
          }
        >

          <div
            className="doctorbg"
            style={{ height: '100vh', overflow: 'scroll' }}
          >

            {/* Doctor Info Inside Popup */}
            <div>

              <div className="doctor-card-profile-image-container">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>

              </div>

              <div className="doctor-card-details">

                <div className="doctor-card-detail-name">
                  {name}
                </div>

                <div className="doctor-card-detail-speciality">
                  {speciality}
                </div>

                <div className="doctor-card-detail-experience">
                  {experience} years experience
                </div>

                <div className="doctor-card-detail-consultationfees">
                  Ratings: {ratings}
                </div>

              </div>

            </div>

            {/* Appointment Section */}
            {appointments.length > 0 ? (

              <>
                <h3 style={{ textAlign: 'center' }}>
                  Appointment Booked!
                </h3>

                {appointments.map((appointment) => (

                  <div
                    className="bookedInfo"
                    key={appointment.id}
                  >

                    <p>Name: {appointment.name}</p>

                    <p>
                      Phone Number: {appointment.phoneNumber}
                    </p>

                    <p>
                      Appointment Date: {appointment.date}
                    </p>

                    <p>
                      Time Slot: {appointment.timeSlot}
                    </p>

                    <button
                      onClick={() => handleCancel(appointment.id)}
                    >
                      Cancel Appointment
                    </button>

                  </div>

                ))}

              </>

            ) : (

              <AppointmentForm
                doctorName={name}
                doctorSpeciality={speciality}
                onSubmit={handleFormSubmit}
              />

            )}

          </div>

        </Popup>

      </div>

    </div>
  );
};

export default DoctorCard;