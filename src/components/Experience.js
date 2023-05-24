import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Timeline from "./Timeline.js";
import ExperienceCard from "./ExperienceCard.js";
import content from "../constants/experience_data.js";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "100px",
  color: "#fafafa",
  marginTop: "75px",
  marginBottom: "75px",
  transition: "gap 0.2s",
  [theme.breakpoints.down("lg")]: {
    gap: "50px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
    gap: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "30px",
    marginTop: "25px",
    padding: "0 20px",
  },
  [theme.breakpoints.down("xs")]: {
    gap: "20px",
  },
}));

export default function Experience() {
  const [active, setActive] = useState(content.length - 2);

  function selectExperience(index) {
    setActive(index);
  }

  return (
    <div>
      <Typography variant="h1" style={{ color: "#fafafa", marginLeft: "10%" }}>
        Experience
      </Typography>
      <Container>
        <Timeline active={active} select={selectExperience}></Timeline>
        <ExperienceCard data={content[active]}></ExperienceCard>
      </Container>
    </div>
  );
}
