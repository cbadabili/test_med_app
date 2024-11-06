//import logo from './logo.svg'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
  // Render the main App component
  const userDetails = {
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        picture: "/default_avatar.png"
    };

  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/profile" element={<ProfileCard user={userDetails} />} />
            <Route path="/reports" element={<ReportsLayout />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
