import React from "react";
import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};
export default App;
