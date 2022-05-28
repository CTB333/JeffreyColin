import React from "react";

import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";

import "../../App.css";
import "./Footer.css";

const Footer = () => {
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

        <Link
          className="footerTab"
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/"
        >
          <Icon style={{ fontSize: 30 }} component={LanguageIcon} />
          <p className="proxima-normal footerText">www.jefferymcolin.com</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
