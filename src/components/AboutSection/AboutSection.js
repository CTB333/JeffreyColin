import React from "react";

import "./AboutSection.css";
import "../../App.css";

const AboutSection = ({ image, title, text }) => {
  return (
    <div className="aboutSectionRoot">
      <div className="sectionHeader">
        <div className="sectionImg">
          <img src={image} alt={title} />
        </div>
        <p className="sectionTitle proxima-normal">{title}</p>
      </div>
      <div className="textSection">
        <p className="sectionText proxima-normal">{text}</p>
      </div>
    </div>
  );
};

export default AboutSection;
