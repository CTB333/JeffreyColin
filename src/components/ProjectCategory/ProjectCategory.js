import React from "react";

import Circle from "../Circle/Circle";

import "../../App.css";
import "./ProjectCategory.css";

const ProjectCategory = ({ text, circle }) => {
  return (
    <div className="categoryBox">
      <p className="categoryText proxima-normal">{text}</p>
      {circle ? (
        <Circle
          style={{ backgroundColor: "#a0aec0", marginLeft: 5 }}
          size={6}
        />
      ) : null}
    </div>
  );
};

export default ProjectCategory;
