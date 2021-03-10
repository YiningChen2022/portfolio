import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
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
  about:
    "Creative software developer, a freelance painter with 2+ years of painting and business management experience.\n\n Result- oriented, patient, quick learner, and team player eager to take engineering skills and interpersonal skills into innovative program development.",
  experiences: [
    {
      title: "Data Engineer",
      date: "05/2019-09/2019",
      decription:
        " Redesigned and organized a program using R. Forecasted and analyzed the IBNR reserves for a 10-year record. Simplified the program procedures and optimized the program performance. Reduced the program run time by 90%. Designed and implemented interactive visualizations by processing and analyzing datasets",
    },
    {
      title: "Freelance painter",
      date: "12/2015-06/2018",
      decription: "Freelance painting",
    },
  ],
  education: [
    {
      title: "Northeastern University",
      date: "09/2020-present",
      decription: "Information Systems",
    },
    {
      title: "Rutgers University",
      date: "01/2017-05/2020",
      decription: "Dual major in Statistics and Labor studies",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "i have been a web developer for 2 years",
      icon: <LanguageIcon />,
    },
    {
      title: "Branding Identity",
      description: "i have been a web developer for 2 years",
      icon: <LanguageIcon />,
    },
    {
      title: "Web Dev",
      description: "i have been a web developer for 2 years",
      icon: <LanguageIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      destription: ["ReactJS", "JavaScript", "BootStrap", "Material UI"],
    },
    {
      title: "BACK-END",
      destription: [
        "Spring boot",
        "Microservices",
        "NodeJS",
        "Express",
        "Java",
        "Python",
      ],
    },
    {
      title: "DATABASES",
      destription: ["Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      destription: ["GitHub", "Git"],
    },
  
  ],
};
