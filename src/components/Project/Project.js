import React, { useEffect, useState } from "react";

import ProjectCategory from "../ProjectCategory/ProjectCategory";
import TintImage from "../TintImage/TintImage";
import "../../App.css";
import "./Project.css";

const Project = ({
  title,
  subTitle,
  categories,
  subText,
  picture,
  tint,
  clickable,
}) => {
  const [rootClass, setRootClass] = useState("projectRoot");

  useEffect(() => {
    if (clickable) {
      setRootClass((v) => (v += " clickable"));
    }
  }, [clickable]);

  return (
    <div className={rootClass}>
      {clickable ? null : null}
      <div className="imageCont">
        <TintImage
          image={picture}
          title={title}
          subTitle={subTitle}
          tint={tint}
        />
      </div>
      <div className="titleBox">
        <p className="title proxima-bold">{title}</p>
      </div>
      <div className="categories">
        {categories.map((value, index, _) => {
          let showCircle = categories.length - 1 !== index;
          return <ProjectCategory circle={showCircle} text={value} />;
        })}
      </div>
      <div className="textBox">
        <p className="proxima-normal">{subText}</p>
      </div>
    </div>
  );
};

export default Project;
