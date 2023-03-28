import { useState } from "react";
import ContactUs from "./components/Contact-Us";
import Footer from "./components/Footer";
import HeroContent from "./components/Hero-Content";
import Navbar from "./components/Navbar";
import OurService from "./components/Our-Service";
import WhatSaid from "./components/What-Said";
import WhyChoose from "./components/Why-Choose";

function App() {
  return (
    <div className="hero-section">
      <Navbar />
      <HeroContent />
      <WhyChoose />
      <OurService />
      <WhatSaid />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
