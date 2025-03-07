import React from "react";
import "./Background.css";
import hero from "../../assets/hero.jpg";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
// import image3 from "../../assets/image3.jpg";
import Navbar from "../Navbar/Navbar";

onst Background = () => {
  return (
    <div className="background-container">
      <Navbar />
      <img src={hero} className="background" alt="Hero Background" />
      <div className="background_head">
        <h1>Eat<br></br>Repeat<br></br>Relax<br></br></h1>
        <p>A slice of joy, a pinch of spice – that's how we make life nice!"</p>
      </div>
      
      <img src={hero2} className="hero2" alt="Hero2 on top" />
      <img src={hero1} className="hero1" alt="Hero1 Image" />
    </div>
  );
};

export default Background;
