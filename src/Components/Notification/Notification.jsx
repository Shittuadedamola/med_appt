// Following code has been commented with appropriate comments for your reference.

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {

  // State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // State variable to control notification visibility
  const [showNotification, setShowNotification] = useState(false);

  // useEffect hook
  useEffect(() => {

    // Retrieve user email
    const storedUsername = sessionStorage.getItem('email');

    // Retrieve doctor information
    const storedDoctorData = JSON.parse(
      localStorage.getItem('doctorData')
    );

    // Retrieve appointment information
    const storedAppointmentData = JSON.parse(
      localStorage.getItem(
        storedDoctorData?.name
      )
    );

    // Check login status
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Store doctor data
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Store appointment data
    if (storedAppointmentData) {

      setAppointmentData(storedAppointmentData);

      // Show notification if appointment exists
      setShowNotification(true);

    }

  }, []);

  // Listen for appointment cancellation
  useEffect(() => {

    // If appointment becomes null,
    // hide notification
    if (!appointmentData) {

      setShowNotification(false);

    }

  }, [appointmentData]);

  // Cancel appointment function
  const handleCancelAppointment = () => {

    // Remove appointment from localStorage
    if (doctorData?.name) {

      localStorage.removeItem(doctorData.name);

    }

    // Update state
    setAppointmentData(null);

    // Hide notification
    setShowNotification(false);

  };

  return (

    <div>

      {/* Navbar */}
      <Navbar />

      {/* Render child components */}
      {children}

      {/* Notification */}
      {isLoggedIn &&
        appointmentData &&
        showNotification && (

        <div className="notification-container">

          <div className="appointment-card">

            <div className="appointment-card__content">

              {/* Notification Title */}
              <h3 className="appointment-card__title">
                Appointment Details
              </h3>

              {/* Username */}
              <p className="appointment-card__message">
                <strong>Patient:</strong> {appointmentData?.name}
              </p>

              {/* User Email */}
              <p className="appointment-card__message">
                <strong>Email:</strong> {username}
              </p>

              {/* Doctor Name */}
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>

              {/* Speciality */}
              <p className="appointment-card__message">
                <strong>Speciality:</strong> {doctorData?.speciality}
              </p>

              {/* Appointment Date */}
              <p className="appointment-card__message">
                <strong>Date:</strong> {appointmentData?.date}
              </p>

              {/* Appointment Time */}
              <p className="appointment-card__message">
                <strong>Time:</strong> {appointmentData?.timeSlot}
              </p>

              {/* Phone Number */}
              <p className="appointment-card__message">
                <strong>Phone:</strong> {appointmentData?.phoneNumber}
              </p>

              {/* Cancel Button */}
              <button
                className="cancel-btn"
                onClick={handleCancelAppointment}
              >
                Cancel Appointment
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
};

// Export component
export default Notification;