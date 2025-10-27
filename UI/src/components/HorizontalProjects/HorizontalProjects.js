import React, { useRef } from "react";

import SmallProject from "../SmallProject/SmallProject";
import { PROJECTS } from "../../Constants/Projects";

import Icon from "@mui/material/Icon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./HorizontalProjects.css";

const HorizontalProjects = ({ rootS, titleS, scrollS, leaveOut }) => {
  let scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 410;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 410;
  };

  return (
    <div style={rootS} className="projects">
      <p style={titleS} className="projectsTitle proxima-normal">
        Check out other projects:
      </p>
      <div className="flex-column container">
        <div ref={scrollRef} style={scrollS} className="scrollHorizontal">
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
        <div className="max-width flex-row arrowBox">
          <div onClick={scrollLeft} className="arrow left center">
            <Icon
              style={{ fontSize: 30, color: "black" }}
              component={ArrowBackIosIcon}
            />
          </div>
          <div onClick={scrollRight} className="arrow right center">
            <Icon
              style={{ fontSize: 30, color: "black" }}
              component={ArrowForwardIosIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProjects;
