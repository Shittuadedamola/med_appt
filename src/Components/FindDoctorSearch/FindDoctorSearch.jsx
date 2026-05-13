import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
  'Dentist',
  'Gynecologist/Obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ENT) Specialist',
  'Homeopath',
  'Ayurveda'
];

const FindDoctorSearch = () => {

  const [doctorResultHidden, setDoctorResultHidden] = useState(true);

  const [searchDoctor, setSearchDoctor] = useState('');

  const [specialities] = useState(initSpeciality);

  const navigate = useNavigate();

  // Filter specialities based on input
  const filteredSpecialities = specialities.filter((speciality) =>
    speciality.toLowerCase().includes(searchDoctor.toLowerCase())
  );

  // Handle doctor selection
  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);

    setDoctorResultHidden(true);

    navigate(`/instant-consultation?speciality=${speciality}`);
  };

  return (
    <div className="finddoctor">

      <center>

        <h1>Find a doctor and Consult instantly</h1>

        <div>
          <i
            style={{ color: '#000000', fontSize: '6rem' }}
            className="fa fa-user-md"
          ></i>
        </div>

        <div
          className="home-search-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >

          <div className="doctor-search-box">

            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctor speciality..."
              
              value={searchDoctor}

              onChange={(e) => setSearchDoctor(e.target.value)}

              // Show list when input is focused
              onFocus={() => setDoctorResultHidden(false)}

              // Hide list when clicked outside
              onBlur={() => {
                setTimeout(() => {
                  setDoctorResultHidden(true);
                }, 200);
              }}
            />

            <div className="search-doctor-input-results" hidden={doctorResultHidden}>

              {
                filteredSpecialities.map((speciality) => (

                  <div
                    className="search-doctor-result-item"
                    key={speciality}

                    onMouseDown={() => handleDoctorSelect(speciality)}
                  >

                    <span>{speciality}</span>

                  </div>
                ))
              }

            </div>

          </div>

        </div>

      </center>

    </div>
  );
};

export default FindDoctorSearch;