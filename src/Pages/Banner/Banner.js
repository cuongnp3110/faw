import React from "react";
import "./banner.css";
import FSB from "../../assets/FSB.png";
const Banner = () => {
  return (
    <div>
      <img className="image-banner" src={FSB} alt="Logo" />
    </div>
  );
};

export default Banner;
