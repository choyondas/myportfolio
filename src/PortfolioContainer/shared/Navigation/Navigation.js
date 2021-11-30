import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="nav-back">
      <nav class="slidemenu">
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          class="slide-toggle"
        />
        <label for="slide-item-1">
          <a href="#home">
            <i class="fas fa-home icon"></i>
            <span>Home</span>
          </a>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          class="slide-toggle"
        />
        <label for="slide-item-2">
          <a href="#blogs">
            <p class="icon">★</p> <span>Bolgs</span>
          </a>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          class="slide-toggle"
        />
        <label for="slide-item-3">
          <a href="#about">
            <i class="fas fa-user icon"></i>
            <span>About</span>
          </a>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-4"
          class="slide-toggle"
        />
        <label for="slide-item-4">
          
          <a href="#contact">
          <p class="icon">✎</p>
            <span>Contact</span>
          </a>
        </label>

        <div class="clear"></div>

        <div class="slider">
          <div class="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
