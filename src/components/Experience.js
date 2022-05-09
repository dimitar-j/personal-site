import React from 'react'
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import Timeline from './Timeline.js'
import ExperienceCard from './ExperienceCard.js'


const Container = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    color: "#fafafa",
    marginTop:"75px",
    marginBottom:"75px",
    transition: "gap 0.2s",
    [theme.breakpoints.down('lg')]: {
        gap:"50px",
    },
    [theme.breakpoints.down('md')]: {
        marginTop:"50px",
        gap:"40px",
    },
    [theme.breakpoints.down('sm')]: {
        gap:"30px",
        marginTop:"25px",
    },
    [theme.breakpoints.down('xs')]: {
        gap:"20px",
    }
}));

export default function Experience() {

    return (
        <div>
            <Typography variant="h1" style={{color:"#fafafa", marginLeft: "10%"}}>
                Experience
            </Typography>
            <Container>
                <Timeline></Timeline>
                <ExperienceCard></ExperienceCard>
            </Container>
        </div>
    )
}
