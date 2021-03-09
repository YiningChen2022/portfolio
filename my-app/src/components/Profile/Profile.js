import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import myImage from "../../assets/images/profile.jpg";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../Timeline/CustomTimeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography>
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem
            title="Name"
            text={resumeData.name}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Email"
            text={resumeData.email}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Phone"
            text={resumeData.phone}
          ></CustomTimelineItem>
        </CustomTimeline>
        <br />
        <button>my button</button>
      </div>
    </div>
  );
};
export default Profile;
