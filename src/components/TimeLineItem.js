import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Line from "../assets/Line.png"
import EndLine from "../assets/EndLine.png"

const Container = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection:"column",
    position:"relative",
}));

const ContentContainer = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:"50px"
}));

export default function TimeLineItem(props) {
    return (
        <Container>
            <ContentContainer>
                <Typography style={{fontWeight: 400, fontSize: "28px"}}>
                    {props.title}
                </Typography>
                <img src={props.icon} alt="Company Logo" width={props.iconWidth} height="auto"/>
            </ContentContainer>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
                {props.last ? 
                <img src={EndLine} alt="Line" width="15px" height="60px" style={{padding:"20px 30px 20px 0px"}}></img>
                :
                <img src={Line} alt="Line" width="2px" height="60px" style={{padding:"20px 37.5px 20px 0px"}}></img>
                }
            </div>
        </Container>
    )
}
