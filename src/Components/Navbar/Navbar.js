import React from 'react';
import './Navbar.css'; // Ensure the CSS file is imported for styling

const Navbar = () => {
  return (
    <div className="navbar">
        <a href="index.html" class="nav-item">Home</a>
        <a href="appointments.html" class="nav-item">Appointments</a>
        <a href="../Sign_Up/Sign_Up.html">Sign Up</a>
        <a href="../Login/Login.html">Login</a>
    </div>
  );
};

export default Navbar;
