import DoctorCard from '../DoctorCard/DoctorCard'
import FindDoctorSearch from '../FindDoctorSearch/FindDoctorSearch'

function BookingConsultation() {
    return(
        <div>
              {/* Search Component */}
      <FindDoctorSearch onSearch={handleSearch}/>

{/* Doctor Cards */}
<DoctorCard
  name="John Doe"
  speciality="Dentist"
  experience={10}
  ratings="4.8/5"
  profile="Experienced dental surgeon"
/>

<DoctorCard
  name="Sarah Smith"
  speciality="Dermatologist"
  experience={7}
  ratings="4.5/5"
  profile="Skin care specialist"
/>
        </div>
    )
}

export default BookingConsultation;