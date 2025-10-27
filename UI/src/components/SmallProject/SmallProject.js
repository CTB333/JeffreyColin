import React, { useEffect, useState } from "react";

import TintImage from "../TintImage/TintImage";
import Icon from "@mui/material/Icon";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { Link } from "react-router-dom";

import "./SmallProject.css";

const SmallProject = ({ image, title, text, tint, clickable, link }) => {
  const [rootClass, setRootClass] = useState("smallProject");

  useEffect(() => {
    if (clickable) {
      setRootClass((v) => (v += " clicakble"));
    }
  }, [clickable]);

  return (
    <div className={rootClass}>
      <div className="smallImageBox">
        {link ? <Link className="invisLink" to={link} /> : null}
        <TintImage
          image={image}
          tint={tint}
          title={clickable ? title : null}
          titleS={
            clickable
              ? {
                  fontSize: 28,
                }
              : null
          }
        >
          {!clickable ? (
            <div style={{ zIndex: 1 }} className="iconOpacity">
              <Icon
                style={{ fontSize: 36, color: "white" }}
                component={LockTwoToneIcon}
              />
            </div>
          ) : null}
        </TintImage>
      </div>
      <div className="textBox">
        <h3 style={{ position: "relative" }} className="proxima-normal">
          {link ? <Link className="invisLink" to={link} /> : null}
          {title}
        </h3>
        <p className="proxima-normal">{text}</p>
      </div>
    </div>
  );
};

export default SmallProject;
