import React from "react";

import "../../App.css";
import "./TintImage.css";

const TintImage = ({
  children,
  image,
  title,
  subTitle,
  tint,
  rootS,
  tintS,
  imgS,
  textBoxS,
  titleS,
  subS,
}) => {
  return (
    <div style={rootS} className="tintImage">
      <div
        style={{ backgroundColor: tint, ...tintS }}
        className="tintTile"
      ></div>
      <img style={imgS} src={image} className="image" alt={title} />
      {!children ? (
        <div style={textBoxS} className="imgTextBox">
          <h3 style={titleS} id="imgText" className="proxima-bold">
            {title}
          </h3>
          {subTitle ? (
            <p style={subS} className="proxima-bold">
              {subTitle}
            </p>
          ) : null}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default TintImage;
