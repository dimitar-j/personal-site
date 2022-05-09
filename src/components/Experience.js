import React from 'react'
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import TimeLineItem from './TimeLineItem';
import Ignite from "../assets/Ignite.png"
import Relectric from "../assets/relectricWhite.png"
import TFG from "../assets/TFG.png"
import FF from "../assets/FF.png"


const Container = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    color: "#fafafa",
    marginTop:"75px"
}));

const TimeLine = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column"
}));

const Card = styled('div')(({theme}) => ({
    backgroundColor: "#282828",
    width: "400px",
    height: "650px",
    borderRadius: "20px"
}));

export default function Experience() {

    function renderTimeline() {
        return (
            <TimeLine>
                <TimeLineItem title="Ignite" icon={Ignite} iconWidth="75px" last={false}></TimeLineItem>
                <TimeLineItem title="Relectric" icon={Relectric} iconWidth="75px"last={false}></TimeLineItem>
                <TimeLineItem title="Tech For Good Inc." icon={TFG} iconWidth="75px"last={false}></TimeLineItem>
                <TimeLineItem title="FansFirst Tickets" icon={FF} iconWidth="75px" last={true}></TimeLineItem>
            </TimeLine>            
        )
    }

    function renderCard(){
        return (
            <Card>
                
            </Card>
        )
    }

    return (
        <div>
            <Typography variant="h1" style={{color:"#fafafa", marginLeft: "10%"}}>
                Experience
            </Typography>
            <Container>
                {renderTimeline()}
                {renderCard()}
            </Container>
        </div>
    )
}
