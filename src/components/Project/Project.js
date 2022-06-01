import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ProjectCategory from "../ProjectCategory/ProjectCategory";
import TintImage from "../TintImage/TintImage";
import "../../App.css";
import "./Project.css";

const Project = ({
  title,
  subTitle,
  categories,
  subText,
  link,
  picture,
  tint,
  clickable,
}) => {
  const [rootClass, setRootClass] = useState("");

  useEffect(() => {
    if (clickable) {
      setRootClass("clickable");
    }
  }, [clickable]);

  return (
    <div className={"project " + rootClass}>
      <div className="imageCont">
        {link ? <Link className="invisLink" to={link} /> : null}
        <TintImage
          image={picture}
          title={title}
          subTitle={subTitle}
          tint={tint}
          titleS={{ fontWeight: 400 }}
        />
      </div>
      <p
        style={{
          marginTop: 30,
          marginBottom: 10,
          fontSize: 34,
          position: "relative",
        }}
        className="proxima-normal"
      >
        {link ? <Link className="invisLink" to={link} /> : null}
        {title}
      </p>
      <div style={{}} className="categories">
        {categories.map((value, index, _) => {
          let showCircle = categories.length - 1 !== index;
          return (
            <ProjectCategory
              circle={showCircle}
              text={value}
              pS={{ fontSize: 20 }}
            />
          );
        })}
      </div>
      <div className="textBox">
        <p style={{ fontSize: 24 }} className="proxima-normal">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default Project;
