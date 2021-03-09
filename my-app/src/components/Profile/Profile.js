import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import myImage from "../../assets/images/profile.jpg";
import CustomTimeline from "../Timeline/CustomTimeline";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Yining</Typography>
        <Typography className="title">yining title</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline/>
        <br />
        <button>my button</button>
      </div>
    </div>
  );
};
export default Profile;
