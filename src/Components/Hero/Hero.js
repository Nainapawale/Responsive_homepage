import React from "react";
import "./Hero.css";
import ads1 from "../../assets/ads1.jpg";
import burger11 from "../../assets/burger11.jpg";
import burger12 from "../../assets/burger12.jpg";
import burger13 from "../../assets/burger13.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Section */}
      <div className="hero-background">
        <img src={ads1} alt="Hero Background" />
      </div>

      {/* Items Section */}
      <div className="items-section">
        <div className="item-card">
          <img src={burger12} alt="Burger" />
          <h3>Cheese Burger</h3>
          <p>$5.99</p>
        </div>

        <div className="item-card">
          <img src={burger13} alt="Pizza" />
          <h3>Spicy Pizza</h3>
          <p>$8.99</p>
        </div>
        <div className="item-card">
          <img src={burger13} alt="Pizza" />
          <h3>Spicy Pizza</h3>
          <p>$8.99</p>
        </div>
        <div className="item-card">
          <img src={burger11} alt="Fries" />
          <h3>Crispy Fries</h3>
          <p>$3.99</p>
        </div>

        <div className="item-card">
          <img src={burger13} alt="Pizza" />
          <h3>Spicy Pizza</h3>
          <p>$8.99</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
