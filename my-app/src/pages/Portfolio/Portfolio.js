import React, { useState } from "react";
import "./Portfolio.css";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Icon,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      {/*Title*/}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/*Tabs*/}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((project) => project.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/*Projects*/}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src="" alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {" "}
            projectDialog.description
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
export default Portfolio;
