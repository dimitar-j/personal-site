import React from 'react'
import { useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import Timeline from './Timeline.js'
import ExperienceCard from './ExperienceCard.js'
import content from './experience_data.js'

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
        padding:"0 20px"
    },
    [theme.breakpoints.down('xs')]: {
        gap:"20px",
    }
}));

export default function Experience() {
    const [active, setActive] = useState(0);

    function selectExperience(selected){
        const map = {
            "Schulich Ignite": 0,
            "Relectric": 1,
            "Tech For Good Inc.": 2,
            "FansFirst Tickets": 3
        }
        setActive(map[selected])
    }

    return (
        <div>
            <Typography variant="h1" style={{color:"#fafafa", marginLeft: "10%"}}>
                Experience
            </Typography>
            <Container>
                <Timeline select={selectExperience}></Timeline>
                <ExperienceCard data={content[active]}></ExperienceCard>
            </Container>
        </div>
    )
}
