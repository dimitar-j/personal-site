import React from "react";
import { styled } from "@mui/system";

const Card = styled("div")(({ theme }) => ({
  backgroundColor: "#282828",
  borderRadius: "10px",
  padding: "50px 50px 25px 50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#fafafa",
  transition: "all .1s ease-out",
  [theme.breakpoints.down("lg")]: {
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "450px",
  },
  "@media (max-width: 400px)": {
    height: "600px",
  },
}));

const SocialContainer = styled("div")(({ theme }) => ({
  borderTop: "1px solid #fafafa",
  display: "flex",
  position: "relative",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10%",
  padding: "20px 0 0 0",
  gap: "20px",
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const Title = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(1.7rem, 2vw + 0.8rem, 3rem)",
  fontWeight: 600,
}));

const Description = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(1rem, 1vw + 0.5rem, 1.5rem)",
  fontWeight: 300,
}));

export default function DesktopProjectCard(props) {
  return (
    <Card>
      <TextContainer>
        <Title>{props.content["name"]}</Title>
        <Description
          dangerouslySetInnerHTML={{ __html: props.content["description"] }}
        ></Description>
      </TextContainer>
      <SocialContainer>
        {props.content.links.map((link) => (
          <a href={link.url} target="_blank">
            <img src={link.icon} width="40px" height="40px"></img>
          </a>
        ))}
      </SocialContainer>
    </Card>
  );
}
