import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import emailer from "../assets/images/emailer.png";
import property from "../assets/images/property.png";
import db from "../assets/images/db.png";
import ODP from "../assets/images/ODP.png";
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
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
    "I am a creative software developer. My technical expertise includes a strong foundation in a programming language(including Java, Python, and SQL) and advanced knowledge of developer applications, tools, methodologies, and best practices (including OOD, web-development using React, Redux, and Spring MVC).\n\n  I am also a freelance painter with 2+ years of painting and business management experience. With that experience, I can be innovative. I understand how to deal with clients and deliver high-quality products on a timely schedule. I am Result-oriented, patient, quick learner, and team player eager to take engineering skills and interpersonal skills into innovative program development.",
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
      description: "Experienced with React, Redux",
      icon: <LanguageIcon />,
    },
    {
      title: "Custom software development",
      description:
        "Development of custom enterprise software solutions to address the unique needs of your business.",
      icon: < AssignmentIndIcon />,
    },
    {
      title: "Software product development",
      description:
        "Development of SaaS, mobile and desktop applications for marketing and distributing to mass enterprise/consumer users.",
      icon: <AddToHomeScreenIcon />,
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
  projects: [
    {
      tag: "DataBase",
      image: db,
      title: "Online Retailing System DataBase",
      caption: "SQLserver, MySQLWorkBench, MongoDB",
      description:
        "The purpose of this database is to maintain data used for business managers to purchase goods from vendors or ship directly from inventory;  \n\n  track orders’ shipment information; check inventory value and provide customer services. \n\n some other features include	 Triggers, Computed Columns, Table-Level Check Constrains with SQL Server. ",
    },
    {
      tag: "Java",
      image: property,
      title: "TeamFolio- Property Management System",
      caption: "Java,OOD, System Design",
      description:
        " Designed an object-oriented system. Developed Engineering system specifications, drawings, and Writing diagrams using tools MYSQLWorkbench or Lucid Chart\n\nProgramed and debugged the system software. Implemented useful features such as conversation dialog, location maps as well as data analysis tools\n\nBuilt, tested, and deploy controlled releases of the user interface",
    },
    {
      tag: "React",
      image: emailer,
      title: "Emailer",
      caption: "React, Redux, Node.js, Express",
      description:
        "Handled full-stack development for a web application. Implementation includes sending email surveys to customers and to retrieve feedback.	\n\n  Programed the front-end using React, Redux reducers. Implemented back-end Request handling using Node.js and Express. Managed data with MongoDB. \n\n  Integrated Passport.js, OAuth2.0, Stripe, SendGrid for user authentication and payment.",
    },
    {
      tag: "Data Science",
      image: ODP,
      title: "IBNR Reserves Prediction",
      caption: "Machine learning, Stochastic Modeling",
      description:
        "Forecasted the IBNR reserves efficiently in R. My work automatically Bootstrap 19 types of insurance’s paid loss triangle ten thousand times in under 5 minutes. \n\n Designed and implemented interactive visualizations by processing and analyzing datasets ",
    },
  ],
};
