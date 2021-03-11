import React from "react";
import "./Footer.css";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer-right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            Yining Chen
          </a>
          <br />
          Clone idea from{" "}
          <a href="https://themeforest.net/" target="_blank">
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};
export default Footer;
