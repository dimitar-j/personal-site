import React from "react";
import { styled } from "@mui/system";
import Line from "../assets/Line.png";
import EndLine from "../assets/EndLine.png";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
}));

const Label = styled("Typography")(({ theme }) => ({
  fontWeight: 400,
  fontSize: "28px",
  display: "block",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: "75px",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "50px",
  },
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
  transition: "all .1s ease-out",
}));

const ActiveLogo = styled("img")(({ theme }) => ({
  width: "75px",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "50px",
  },
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
  transform: "scale(1.1)",
  transition: "all .1s ease-out",
}));

const Connector = styled("img")(({ theme }) => ({
  padding: "20px 30px 20px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 15px 20px 0px",
  },
}));
const EndConnector = styled("img")(({ theme }) => ({
  padding: "20px 37.5px 20px 0px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 23.5px 20px 0px",
  },
}));

export default function TimeLineItem(props) {
  return (
    <Container>
      <ContentContainer>
        <Label>{props.title}</Label>
        {props.index === props.active ? (
          <ActiveLogo
            src={props.icon}
            alt="Company Logo"
            onClick={() => props.select(props.index)}
          />
        ) : (
          <Logo
            src={props.icon}
            alt="Company Logo"
            onClick={() => props.select(props.index)}
          />
        )}
      </ContentContainer>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {!props.last && (
          <EndConnector
            src={Line}
            alt="Line"
            width="2px"
            height="60px"
          ></EndConnector>
        )}
      </div>
    </Container>
  );
}
