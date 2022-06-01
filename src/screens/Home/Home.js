import React from "react";

import { Project } from "../../components/index";

import { PROJECTS } from "../../Constants/Projects";

import "../../App.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="headingBox">
        <h3 style={{ marginBottom: 10 }} className="heading proxima-normal">
          User experience designer
        </h3>
        <h3 style={{ marginBottom: 20 }} className="heading proxima-normal">
          passionate about inclusive design.
        </h3>
      </div>
      <div className="subHeadingBox">
        <p className="subHeading proxima-normal">
          Currently designing <span className="grey">@Courtier</span>.
          Previously <span className="yellow">@Michwich</span>,{" "}
          <span className="blue">@MovieSeat</span>,{" "}
          <span className="red">@Pakapala</span> and{" "}
          <span className="orange">@GrabnEats</span>. Recent graduate of Google
          UX Design Professional
        </p>
      </div>
      <h3 className="projectHeading proxima-normal">Projects</h3>
      <div className="projectBox">
        {PROJECTS.map((v, i, _) => {
          let clickable = false;
          let link = null;

          if (v.title === "MovieSeat" || v.title === "Michwich") {
            clickable = true;
            link = "/projects/" + v.title;
          }

          return (
            <Project
              title={v.title}
              subText={v.subText}
              subTitle={v.subTitle}
              categories={v.categories}
              tint={v.color}
              picture={v.imagePath}
              clickable={clickable}
              link={link}
            />
          );
        })}
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Home;
