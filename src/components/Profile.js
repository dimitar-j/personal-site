import React from "react";
import { styled } from "@mui/system";
import Photo from "../assets/ProfileIcon.jpeg";
import LinkedIn from "../assets/linkedinBlack.png";
import Resume from "../assets/resumeBlack.png";
import GitHub from "../assets/githubBlack.png";
import ResumePDF from "../assets/DimitarJanevskiResume.pdf";
import GridsDesktop from "../assets/GridsDesktop.png";
import GridsTablet from "../assets/GridsTablet.png";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fafafa",
  justifyContent: "center",
  paddingTop: "10vw",
  paddingBottom: "5vw",
  backgroundImage: `url(${GridsDesktop})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginBottom: "75px",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${GridsTablet})`,
  },
}));

const SocialIconsContainer = styled("div")({
  display: "flex",
  marginTop: "10px",
  marginBottom: "75px",
  gap: "5px",
  "& > a": {
    "&:hover": {
      transform: "scale(1.1)",
    },
    transition: "all .1s ease-out",
  },
});

const ProfilePhoto = styled("motion.img")({
  borderRadius: "50%",
  boxShadow: "0px 0px 105px rgba(0, 0, 0, 0.4)",
  margin: "15px 0px",
});

export default function Profile() {
  return (
    <section style={{ position: "relative" }}>
      <Container>
        <ProfilePhoto
          src={Photo}
          alt="Profile Photo"
          width="225px"
          height="225px"
          as={motion.img}
          whileTap={{ rotate: 2 }}
        ></ProfilePhoto>
        <Typography
          variant="h2"
          sx={{ margin: "10px 20px", textAlign: "center" }}
        >
          Hey there! My name is Dimitar 👋
        </Typography>
        <SocialIconsContainer>
          <a
            href="https://www.linkedin.com/in/dimitarjanevski/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedIn}
              onClick="https://www.linkedin.com/in/dimitarjanevski/"
              alt="LinkedIn Icon"
              width="45px"
              heigh="45px"
            ></img>
          </a>
          <a href={ResumePDF} target="_blank" rel="noreferrer">
            <img src={Resume} alt="Resume Icon" width="45px" heigh="45px"></img>
          </a>
          <a
            href="https://github.com/dimitar-j"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub Icon" width="45px" heigh="45px"></img>
          </a>
        </SocialIconsContainer>
        <Typography variant="h5">Let's go!</Typography>
        <motion.div
          animate={{ y: [0, 15, 0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, type: "spring" }}
        >
          <ExpandMoreIcon
            color="black"
            sx={{ fontSize: 40, marginBottom: "1%" }}
          ></ExpandMoreIcon>
        </motion.div>
      </Container>
      <div class="custom-shape-divider-bottom-1651714942">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
