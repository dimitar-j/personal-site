import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Globe from "../assets/globe.png";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10% 10% 5% 10%",
  gap: "80px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "40px",
  },
}));

const TextContainer = styled("div")(({ themse }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));

const Description = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(1.20rem, 1vw + 0.65rem, 1.40rem)",
  fontWeight: 300,
}));

export default function Background() {
  return (
    <section style={{ position: "relative" }}>
      <Container>
        <TextContainer>
          <Typography variant="h1" style={{ color: "#fafafa" }}>
            Background
          </Typography>
          <Description style={{ color: "#fafafa" }}>
            I was born and raised in a small country in Europe called Macedonia
            🇲🇰 I moved to Calgary in 2009 and have finished my 3rd year of
            Software Engineering at the University of Calgary. I worked as the
            lead software engineer for a year at a local startup, FansFirst
            Tickets, and I'm currently in San Francisco for Summer interning at
            Semgrep 🌁 and I'll be interning at Tesla in Fall ⚡️ In my free
            time, I enjoy building projects and learning new things 👨‍💻 playing
            soccer ⚽ snowboarding 🏂 and traveling ✈️
          </Description>
        </TextContainer>
        <img src={Globe} width="100%"></img>
      </Container>
    </section>
  );
}
