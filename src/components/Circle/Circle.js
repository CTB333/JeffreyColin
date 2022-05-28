import React from "react";
import "./Circle.css";

const Circle = ({ size, children, style, className }) => {
  const dimensions = {
    width: size,
    height: size,
    borderRadius: size,
    ...style,
  };

  return (
    <div style={size ? dimensions : null} className={`circle ${className}`}>
      {children}
    </div>
  );
};

export default Circle;
