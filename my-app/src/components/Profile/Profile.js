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

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
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
        <CustomTimeline >
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
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            ></CustomTimelineItem>
          ))}
        </CustomTimeline>

        <br />
        <button>my button</button>
      </div>
    </div>
  );
};
export default Profile;
