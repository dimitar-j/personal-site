import React from 'react'
import { styled } from '@mui/system';
import TimeLineItem from './TimeLineItem';
import Ignite from "../assets/Ignite.png"
import Relectric from "../assets/relectricWhite.png"
import TFG from "../assets/TFG.png"
import FF from "../assets/FF.png"

const TimeLine = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column"
}));

export default function Timeline(props) {
    return (
        <TimeLine>
            <TimeLineItem active={props.active} index={0} title="Schulich Ignite" icon={Ignite} iconWidth="75px" last={false} select={props.select}></TimeLineItem>
            <TimeLineItem active={props.active} index={1} title="Relectric" icon={Relectric} iconWidth="75px"last={false} select={props.select}></TimeLineItem>
            <TimeLineItem active={props.active} index={2} title="Tech For Good Inc." icon={TFG} iconWidth="75px"last={false} select={props.select}></TimeLineItem>
            <TimeLineItem active={props.active} index={3} title="FansFirst Tickets" icon={FF} iconWidth="75px" last={true} select={props.select}></TimeLineItem>
        </TimeLine>  
    )
}
