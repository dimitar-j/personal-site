import React from "react";
import { styled } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { motion } from "framer-motion";

import CharacterV2 from "../assets/Saly-2-cropped.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const Container = styled("div")(({ theme }) => ({
  paddingLeft: "10%",
  paddingRight: "10%",
  marginBottom: "45px",
  position: "relative",
  ["@media (min-width:1180px)"]: {
    marginTop: "150px",
  },
}));

const Subtitle = styled("Typography")(({ theme }) => ({
  color: "#fafafa",
  fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.1rem)",
}));

const ImageContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-35px",
  right: "0",
  width: "35%",
  "@media (max-width: 1179px)": {
    display: "none",
  },
}));

const SuccessContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: "rgb(0,170,83)",
  display: "flex",
  gap: "5px",
  justifyContent: "center",
  alignItems: "flex-end",
}));

const ErrorContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: "#b00020",
  display: "flex",
  gap: "5px",
  justifyContent: "center",
  alignItems: "flex-end",
}));

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const axios = require("axios").default;

  const handleFieldChange = (event, property) => {
    if (property === "name") {
      setName(event.target.value);
    } else if (property === "email") {
      setEmail(event.target.value);
    } else if (property === "message") {
      setMessage(event.target.value);
    }
  };

  const renderSuccessDialog = () => {
    return (
      <SuccessContainer>
        <CheckCircleIcon></CheckCircleIcon>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Email Sent!
        </Typography>
      </SuccessContainer>
    );
  };

  const renderErrorDialog = () => {
    return (
      <ErrorContainer>
        <MediaQuery minWidth={900}>
          <CancelIcon></CancelIcon>
        </MediaQuery>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          {errorMessage}
        </Typography>
      </ErrorContainer>
    );
  };

  function validEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    if (name === "" || email === "" || message === "") {
      setErrorMessage("Please fill out all fields before submitting.");
      setSuccess(false);
      setFail(true);
    } else if (!validEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      setSuccess(false);
      setFail(true);
    } else {
      setSubmitting(true);
      axios
        .post(
          "https://41l9b8a1xf.execute-api.us-east-1.amazonaws.com/default/helloWorld",
          {
            name: name,
            email: email,
            message: message,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then(function (response) {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
          setFail(false);
          setErrorMessage("");
        })
        .catch(function (error) {
          setSuccess(false);
          setFail(true);
          setErrorMessage(
            "Email could not be sent. Please try again later, or email me directly at dimitar.j27@gmail.com."
          );
        });
      console.log("finished");
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Typography variant="h1" style={{ color: "#fafafa" }}>
        Contact
      </Typography>
      <Subtitle variant="span">Let's get in touch!</Subtitle>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{
          paddingTop: "20px",
          width: "65%",
          marginLeft: "0",
          "@media (max-width: 1179px)": {
            width: "100%",
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            "&.MuiGrid-item": {
              "@media (max-width: 899px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
              },
              "@media (min-width: 900px)": {
                paddingLeft: "0px",
                paddingRight: "5px",
              },
            },
          }}
        >
          <TextField
            id="filled-basic"
            fullWidth
            variant="filled"
            placeholder="Name"
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              handleFieldChange(e, "name");
            }}
            value={name}
            sx={{
              input: {
                color: "#fafafa",
                backgroundColor: "#282828",
                borderRadius: "15px",
                padding: "20px 25px",
              },
            }}
            as={motion.div}
            whileTap={{ scale: 1.05 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            "&.MuiGrid-item": {
              "@media (max-width: 899px)": {
                paddingLeft: "0px",
                paddingRight: "0px",
              },
              "@media (min-width: 900px)": {
                paddingLeft: "5px",
              },
            },
          }}
        >
          <TextField
            id="filled-basic"
            fullWidth
            variant="filled"
            placeholder="Email"
            value={email}
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              handleFieldChange(e, "email");
            }}
            sx={{
              input: {
                color: "#fafafa",
                backgroundColor: "#282828",
                borderRadius: "15px",
                padding: "20px 25px",
              },
            }}
            as={motion.div}
            whileTap={{ scale: 1.05 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            "&.MuiGrid-item": {
              paddingLeft: "0px",
            },
          }}
        >
          <TextField
            id="filled-basic"
            fullWidth
            variant="filled"
            placeholder="Your Message..."
            value={message}
            InputProps={{
              disableUnderline: true,
              style: {
                height: "200px",
                alignItems: "flex-start",
                paddingLeft: "25px",
                paddingRight: "25px",
              },
            }}
            onChange={(e) => {
              handleFieldChange(e, "message");
            }}
            sx={{
              backgroundColor: "#282828",
              borderRadius: "15px",
              input: {
                color: "#fafafa",
                backgroundColor: "#282828",
              },
              textArea: {
                color: "#fafafa",
              },
            }}
            multiline
            rows={7}
            as={motion.div}
            whileTap={{ scale: 1.05 }}
          />
        </Grid>
      </Grid>
      <ImageContainer>
        <img src={CharacterV2} height="100%" width="300vw"></img>
      </ImageContainer>
      <Button
        variant="Contained"
        sx={{
          backgroundColor: "#F74C4C",
          color: "#fafafa",
          "&:hover": {
            backgroundColor: "#F74C4C",
          },
          width: "100%",
          height: "50px",
          borderRadius: "15px",
          marginTop: "20px",
          marginBottom: "10px",
        }}
        endIcon={<MailOutlineIcon></MailOutlineIcon>}
        onClick={handleSubmit}
        disabled={submitting}
        component={motion.div}
        whileTap={{ scaleX: 1.05, scaleY: 0.9 }}
      >
        Send Email
      </Button>
      {!success && !fail ? <div style={{ marginTop: "60px" }}></div> : null}
      {success && renderSuccessDialog()}
      {fail && renderErrorDialog()}
    </Container>
  );
}
