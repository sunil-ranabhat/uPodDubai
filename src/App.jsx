import React from "react";
import Navbar from "./components/Navbar";
import FAQPage from "./pages/FAQ";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";

import PhotoGallery from "./pages/photogallery";
import DateTimeSelection from "./pages/DateTimeSelection";
import HourSelection from "./pages/hourselection";
import BookingForm from "./pages/Details";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";




const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      
      {/* Add padding to prevent content overlap */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booknow" element={<Booking />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Signup/>} />
          <Route path="/bookstudio" element={<BookNow/>} />
          <Route path="/hourselection" element={<HourSelection/>} />
          <Route path="/DateTimeSelection" element={<DateTimeSelection/>} />
          <Route path="/details" element={<BookingForm/>} />
          <Route path="/photogallery" element={<PhotoGallery/>} />
          
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
