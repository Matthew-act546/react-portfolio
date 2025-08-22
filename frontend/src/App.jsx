import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Portfolio from "./components/Portfolio";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

import React, { useEffect } from "react";
import logo from "./images/circular-logo.png";


function App() {
   useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = logo; 
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Testimonials />
      <FAQ />
      <Portfolio />
      <GetStarted />
      <Footer />
    </>
  )
}

export default App
