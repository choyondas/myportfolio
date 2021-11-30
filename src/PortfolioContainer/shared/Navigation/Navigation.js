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
          <i class="fas fa-home icon"></i>
          <span>Home</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          class="slide-toggle"
        />
        <label for="slide-item-2">
          <p class="icon">★</p>
          <span>Bolgs</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          class="slide-toggle"
        />
        <label for="slide-item-3">
          <i class="fas fa-user icon"></i>
          <span>About</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-4"
          class="slide-toggle"
        />
        <label for="slide-item-4">
          <p class="icon">✎</p>
          <span>Contact</span>
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
