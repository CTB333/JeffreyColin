import React from "react";

import { Link } from "react-router-dom";

import aboutMe from "../../assets/aboutMe.png";
import { AboutSection, HorizontalProjects } from "../../components/index";

import { Details as SECTIONS } from "../../Constants/About";

import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <div className="aboutRoot">
      <div className="titleBox">
        <p className="title proxima-bold">About Me</p>
      </div>
      <div className="partition">
        <div className="part">
          <div className="imgBox">
            <img src={aboutMe} alt="Me" />
          </div>
          <p
            style={{ fontSize: 33, marginTop: 5 }}
            className="proxima-bold title"
          >
            What am I like outside of work?{" "}
          </p>
        </div>
        <div className="part">
          <div style={{ marginBottom: 30 }}>
            <p className="paragraph proxima-normal">
              Born and raised in New York but currently residing in Florida I'm
              a UX Designer who loves crafting big ideas. I love new challenges
              and strive to solve human problems with efficient products for
              users. I am passionate about creating meaningful experiences that
              shape how we interact with technology. As a designer I view the
              process as creative problem solving which puts the users goals and
              needs front and center. It is important to me as a UX designer
              that problems are identified and we take those pain points and
              create pain relievers.
            </p>
          </div>
          <div style={{ marginBottom: 30 }}>
            <p className="paragraph proxima-normal">
              UX has allowed to bridge the gap between my interests in art,
              psychology and technology to tackle a wide array of problems and
              even better; create experiences with lasting impacts. I'm elated
              and greatful that I have found UX. When I first discovered UX it
              felt like a calling.
            </p>
          </div>
          <div style={{ marginBottom: 30 }}>
            <p className="paragraph proxima-normal">
              When I'm not designing I could be found: staying active, eating
              healthy, traveling, taking photos/videos, spending time with
              family/friends and sadly looking at design/ tech trends, what can
              I say “I love what I do”.
            </p>
          </div>
          <div style={{ marginBottom: 15 }}>
            <p className="paragraph proxima-normal">
              Thank you for viewing my portfolio.
            </p>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/resume"
            >
              <p
                style={{ color: "#62A4FB" }}
                className="paragraph proxima-normal"
              >
                Check out my resume
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="aboutSections">
        {SECTIONS.map((v, i, _) => {
          return <AboutSection image={v.img} title={v.title} text={v.text} />;
        })}
      </div>
      <div>
        <HorizontalProjects />
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default About;

/*










*/
