import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
export default {
  name: "Yining Chen",
  title: "Full Stack Developer",
  email: "chen.yinin@northeastern.edu",

  phone: "732 668 0885",
  socials: {
    Linkedin: {
      link: "http://linkedin.com/in/yiningchen2018",
      text: "View My Linkedin",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/YiningChen2022",
      text: "View My GitHub",
      icon: <GitHubIcon />,
    },
  },
};
