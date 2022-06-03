import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "@mui/material/Icon";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";

import "./Footer.css";

const Footer = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const navigateToHome = () => {
    if (location.pathname == "/") {
      window.scrollTo({ top: 275, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="footer">
      <div className="footerBox">
        <div className="footerTab">
          <Icon style={{ fontSize: 30 }} component={EmailOutlinedIcon} />
          <p className="proxima-normal footerText">jeffreymcolin@gmail.com</p>
        </div>
        <div className="footerTab">
          <Icon style={{ fontSize: 30 }} component={LocalPhoneIcon} />
          <p className="proxima-normal footerText">(424) 248-9047</p>
        </div>

        <div onClick={navigateToHome} className="footerTab">
          <Icon style={{ fontSize: 30 }} component={LanguageIcon} />
          <p className="proxima-normal footerText">www.jefferymcolin.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
