import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUserMd } from "react-icons/fa"

<FaUserMd />

const Navbar = () => {
  return (
    <div>
        <nav>
            {/* Navigation logo section */}
            <div className="nav__logo">
            {/* Link to the home page */}
            <a href="/">
                StayHealthy 
                {/* Insert an SVG icon of a doctor with a stethoscope */}
                <FaUserMd />
            </a>
            {/* A span element for styling purposes */}
            <span>.</span>
            </div>
            {/* Navigation icon section with an onClick event listener */}
            <div className="nav__icon">
            {/* Font Awesome icon for bars (hamburger menu) */}
            <i className="fa fa-times fa fa-bars"></i>
            </div>

            {/* Unordered list for navigation links with 'active' className */}
            <ul className="nav__links active">
            {/* List item for the 'Home' link */}
            <li className="link">
                <a href="../Landing_Page/LandingPage.html">Home</a>
            </li>
            {/* List item for the 'Appointments' link */}
            <li className="link">
                <a href="#">Appointments</a>
            </li>
            {/* List item for the 'Sign Up' link with a button */}
            <li className="link">
                <Link to="/signup">
                    <button className="btn1">Sign Up</button>
                </Link>
            </li>
            {/* List item for the 'Login' link with a button */}
            <li className="link">
                <Link to="/login">
                    <button className="btn1">Login</button>
                </Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar