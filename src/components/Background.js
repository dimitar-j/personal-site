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
            I was born and raised in Maceodnia 🇲🇰 and moved to Calgary in 2009
            where I am now studying Software Engineering at the University of
            Calgary 🇨🇦 I began programming in Grade 9 when I taught myself game
            development with C# and Unity 👾 Since then, I have worked as the
            lead software engineer at a local startup, FansFirst Tickets, and
            interned at Semgrep in San Francisco 🌁 I'm currently interning at
            Tesla, I'll be at TikTok for Winter, and I'm seeking a Summer 2024
            internship! In my free time, I enjoy building projects and learning
            new things 👨‍💻 playing soccer ⚽ snowboarding 🏂 and traveling ✈️
          </Description>
        </TextContainer>
        <img src={Globe} width="100%"></img>
      </Container>
    </section>
  );
}
