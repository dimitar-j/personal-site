import React from "react";
import { Typography } from "@mui/material";
import MediaQuery from "react-responsive";
import DesktopProjectsGrid from "./DesktopProjectsGrid.js";
import MobileProjectsSlideshow from "./MobileProjectsSlideshow.js";

export default function Projects() {
  return (
    <div style={{ marginBottom: "75px" }}>
      <Typography
        gutterBottom
        variant="h1"
        style={{ color: "#fafafa", padding: "0% 10%" }}
      >
        Projects
      </Typography>
      <MediaQuery minWidth={1180}>
        <DesktopProjectsGrid></DesktopProjectsGrid>
      </MediaQuery>
      <MediaQuery maxWidth={1179}>
        <MobileProjectsSlideshow></MobileProjectsSlideshow>
      </MediaQuery>
    </div>
  );
}
