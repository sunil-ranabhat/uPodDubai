import React from "react";
import Navbar from "./components/Navbar";
import FAQPage from "./pages/FAQ";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding to prevent content overlap */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
