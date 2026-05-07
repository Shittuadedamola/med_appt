import React from 'react'
import './Sign_Up.css'
import { Link } from 'react-router-dom';

const Sign_Up = () => {
  return (
    <div>
        <div className="container" style={{ marginTop: "5%" }}> {/* Main container with margin-top */}
        <div className="signup-grid"> {/* Grid layout for sign-up form */}
            <div className="signup-text"> {/* Title for the sign-up form */}
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{ textAlign: "left" }}> {/* Text for existing members to log in */}
                Already a member? <span><Link to="/login" style={{ color: "#2190FF" }}>Login</Link></span>
            </div>
            <div className="signup-form"> {/* Form for user sign-up */}
                <form> {/* Start of the form */}

                    <div className="form-group"> {/* Form group for user's name */}
                        <label htmlFor="name">Name</label> {/* Label for name input field */}
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" /> {/* Text input field for name */}
                    </div>

                    <div className="form-group"> {/* Form group for user's phone number */}
                        <label htmlFor="phone">Phone</label> {/* Label for phone input field */}
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" 
                        pattern="[0-9]{10}"
                        title="Phone number must be exactly 10 digits"/> {/* Tel input field for phone number */}
                    </div>

                    <div className="form-group"> {/* Form group for user's email */}
                        <label htmlFor="email">Email</label> {/* Label for email input field */}
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" 
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$"
                        title="Email must end with .com (e.g. user@anymail.com)"/> {/* Email input field */}
                    </div>

                    <div className="form-group"> {/* Form group for user's password */}
                        <label htmlFor="password">Password</label> {/* Label for password input field */}
                        <input type='password' name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" 
                        minLength={8}/> {/* Password input field */}
                    </div>

                    <div className="btn-group"> {/* Button group for form submission and reset */}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> {/* Submit button */}
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> {/* Reset button */}
                    </div>
                </form> {/* End of the form */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sign_Up