import React from 'react'
import { styled } from '@mui/system';

const Card = styled('div')(({theme}) => ({
    backgroundColor: "#282828",
    width: "400px",
    height: "650px",
    borderRadius: "20px",
    transition: "width 0.2s",
    [theme.breakpoints.down('sm')]: {
        width: "250px",
    },
    [theme.breakpoints.down('xs')]: {
        width: "200px",
    },
}));

export default function ExperienceCard() {
    return (
        <Card>
                
        </Card>
    )
}
