import React from "react";

import { Link } from "react-router-dom";

import Circle from "../Circle/Circle";
import "../../App.css";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        className="circleBox"
        to="/"
      >
        <Circle className="rotate" style={{ position: "relative" }} size={55}>
          <h3 className="initial proxima-normal">jc.</h3>
        </Circle>
        <h3 className="full proxima-normal">jeffrey colin</h3>
      </Link>
      <div className="tabs">
        <p className="tab proxima-normal">
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            Projects
          </Link>
        </p>
        <p className="tab proxima-normal">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/about"
          >
            About
          </Link>
        </p>
        <p className="tab proxima-normal">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/resume"
          >
            Resume
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
