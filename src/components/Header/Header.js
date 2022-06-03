import React, { useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Circle from "../Circle/Circle";

import "./Header.css";

const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    console.log("Location Change");
    console.log(location);
  }, [location]);

  const navigateToHome = () => {
    if (location.pathname == "/") {
      window.scrollTo({ top: 275, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const navigateToAbout = () => {
    if (location.pathname == "/about") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/about");
    }
  };

  const navigateToResume = () => {
    if (location.pathname == "/resume") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/resume");
    }
  };

  return (
    <div className="header flex-row">
      <div onClick={navigateToHome} className="flex-row max-height circleBox">
        <div className="center">
          <Circle
            className="rotate"
            style={{ position: "relative", marginRight: 20 }}
            size={55}
          >
            <h3 className="initial proxima-normal">jc.</h3>
          </Circle>
          <h3 className="full proxima-normal">jeffrey colin</h3>
        </div>
      </div>

      <div className="tabs flex-row">
        <p
          onClick={navigateToHome}
          className="tab proxima-normal flex-row center"
        >
          Projects
        </p>
        <p
          onClick={navigateToAbout}
          className="tab proxima-normal flex-row center"
        >
          About
        </p>
        <p
          onClick={navigateToResume}
          className="tab proxima-normal flex-row center"
        >
          Resume
        </p>
      </div>
    </div>
  );
};

export default Header;
