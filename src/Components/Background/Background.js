import React from "react";
import "./Background.css";
import hero from "../../assets/hero.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import Navbar from "../Navbar/Navbar";

const Background = ({ heroCount }) => {
  // Selecting image based on heroCount
  const images = [hero, image1, image2, image3];
  const selectedImage = images[heroCount] || hero; // Default to first image if out of range

  return (
    <div>
      <Navbar /> {/* Added Navbar if needed */}
      <img src={selectedImage} className="background" alt="Background" />
    </div>
  );
};

export default Background;
