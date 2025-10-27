import React from "react";

import Circle from "../Circle/Circle";

import "./ProjectCategory.css";

const ProjectCategory = ({ text, circle, rootS, pS, circleS }) => {
  return (
    <div style={rootS} className="categoryBox">
      <p style={pS} className="categoryText proxima-normal">
        {text}
      </p>
      {circle ? (
        <Circle
          style={{ backgroundColor: "#a0aec0", marginLeft: 5, ...circleS }}
          size={6}
        />
      ) : null}
    </div>
  );
};

export default ProjectCategory;
