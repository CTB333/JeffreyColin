import React from "react";

import SmallProject from "../SmallProject/SmallProject";
import { PROJECTS } from "../../Constants/Projects";

import "../../App.css";
import "./HorizontalProjects.css";

const HorizontalProjects = ({ rootS, titleS, scrollS, leaveOut }) => {
  return (
    <div style={rootS} className="projects">
      <p style={titleS} className="projectsTitle proxima-normal">
        Check out other projects:
      </p>
      <div style={scrollS} className="scrollHorizontal">
        {PROJECTS.map((v, i, _) => {
          let clickable = false;
          let link = null;

          if (v.title === "MovieSeat" || v.title === "Michwich") {
            clickable = true;
            link = "/projects/" + v.title;
          }

          if (leaveOut && leaveOut.includes(v.title)) {
            return null;
          }

          return (
            <SmallProject
              image={v.imagePath}
              title={v.title}
              text={v.subText}
              tint={v.color}
              clickable={clickable}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalProjects;
