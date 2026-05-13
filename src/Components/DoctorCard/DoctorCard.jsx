import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({
  name = "Dam Ola",
  speciality = "Dentist",
  experience = "5",
  ratings = "*****",
//   profile,
  image = "https://www.shutterstock.com/image-illustration/cute-cartoon-doctor-stethoscope-flat-600nw-2660180777.jpg"
}) => {

  const handleBooking = () => {
    alert(`Appointment booked with Dr. ${name}`);
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

        {/* Optional Career Profile */}
        {/* <p className="doctor-profile">
          <strong>Career Profile:</strong> {profile}
        </p> */}

        <div>
            <button className="book-appointment-btn">
                <div>Book Appointment</div>
                <div>No Booking Fee</div>
            </button>
        </div>

      </div>

      {/* Appointment Button
      <div className="doctor-card-button-container">

        <button
          className="book-appointment-btn"
          onClick={handleBooking}
        >
          Book Appointment
        </button>

      </div> */}

    </div>
  );
};

export default DoctorCard;