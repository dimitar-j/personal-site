import React from "react";
import { Grid } from "@mui/material";
import content from "../constants/project_data.js";
import DesktopProjectCard from "./DesktopProjectCard.js";

export default function DesktopProjectsGrid() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
      style={{ marginTop: "30px", padding: "0% 10% 0% 10%" }}
    >
      {content.reverse().map((project) => (
        <DesktopProjectCard content={project}></DesktopProjectCard>
      ))}
    </Grid>
  );
}
