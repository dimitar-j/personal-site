import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Globe from '../assets/globe.png'

const Container = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10%",
    gap: "80px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        gap: "40px"
    }
}));

const TextContainer = styled('div')(({themse}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "40px",
}));

export default function Background() {
    return (
        <section style={{position: "relative"}}>
            <Container>
                <TextContainer>
                    <Typography variant="h1" style={{color:"#fafafa"}}>
                        Background
                    </Typography>
                    <Typography variant="body" style={{color:"#fafafa"}}>
                        I was born and raised in a small country in Europe called Macedonia 🇲🇰 I moved to Calgary in 2009 and have been living here since then! I am going into my 3rd year of Software Engineering at the University of Calgary, and am currently working as a Full Stack Engineering Intern at a startup, FansFirst. In my free time I enjoy building projects and learning new things 👨‍💻 playing soccer ⚽  hiking ⛰️ and snowboarding 🏂
                    </Typography>
                </TextContainer>
                <img src={Globe} width="100%"></img>
            </Container>
        </section>
    )
}
