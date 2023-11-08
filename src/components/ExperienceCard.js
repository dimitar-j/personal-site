import React from "react";
import { styled } from "@mui/system";

const Card = styled("div")(({ theme }) => ({
  backgroundColor: "#282828",
  position: "sticky",
  top: "20%",
  width: "360px",
  height: "fit-content",
  borderRadius: "20px",
  transition: "width 0.2s",
  display: "flex",
  flexDirection: "column",
  padding: "40px 40px 20px 40px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    top: "10%",
    padding: "40px 30px 20px 30px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "200px",
    top: "8%",
  },
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

const HeaderTextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
}));

const Title = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(1rem, 2vw + 0.75rem, 2rem)",
  fontWeight: 700,
}));

const Role = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(0.9rem, 1vw + 0.6rem, 1.1rem)",
  fontWeight: 500,
  fontStyle: "italic",
}));

const Date = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(0.8rem, 1vw + 0.55rem, 1rem)",
  fontWeight: 200,
}));

const Logo = styled("img")(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  width: "5.5em",
  height: "auto",
}));

const FooterLogo = styled("img")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  justifyContent: "center",
  width: "5em",
  height: "auto",
}));

const Body = styled("Typography")(({ theme }) => ({
  fontSize: "clamp(0.9rem, 1vw + 0.5rem, 1.1rem)",
  fontWeight: 300,
  paddingTop: "20px",
}));

export default function ExperienceCard(props) {
  return (
    <Card>
      <Header>
        <HeaderTextContainer>
          <Title>{props.data["name"]}</Title>
          <Role>{props.data["role"]}</Role>
          <Date>{props.data["date"]}</Date>
        </HeaderTextContainer>
        <Logo src={props.data["logo"]}></Logo>
      </Header>
      <Body
        dangerouslySetInnerHTML={{ __html: props.data["description"] }}
      ></Body>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <FooterLogo src={props.data["logo"]}></FooterLogo>
      </div>
    </Card>
  );
}
