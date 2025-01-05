import React from "react";
import Navbar from "./components/Navbar";
import FAQPage from "./pages/FAQ";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import LoginForm from "./pages/Login";
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding to prevent content overlap */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booknow" element={<Booking />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<SignUp />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
