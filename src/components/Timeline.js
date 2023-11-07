import React from "react";
import { styled } from "@mui/system";
import TimeLineItem from "./TimeLineItem";
import Ignite from "../assets/Ignite.png";
import Relectric from "../assets/relectricWhite.png";
import TFG from "../assets/TFG.png";
import FF from "../assets/FF.png";
import TS from "../assets/TS.png";
import Semgrep from "../assets/Semgrep.png";
import Tesla from "../assets/Tesla.png";
import TikTok from "../assets/TikTok.png";

const TimeLine = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Timeline(props) {
  return (
    <TimeLine>
      <TimeLineItem
        active={props.active}
        index={0}
        title="Schulich Ignite"
        icon={Ignite}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={1}
        title="Relectric"
        icon={Relectric}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={2}
        title="Tech For Good Inc."
        icon={TFG}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={3}
        title="Tech Start"
        icon={TS}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={4}
        title="FansFirst Tickets"
        icon={FF}
        iconWidth="50px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={5}
        title="Semgrep"
        icon={Semgrep}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={6}
        title="Tesla"
        icon={Tesla}
        iconWidth="75px"
        last={false}
        select={props.select}
      ></TimeLineItem>
      <TimeLineItem
        active={props.active}
        index={7}
        title="TikTok"
        icon={TikTok}
        iconWidth="75px"
        last={true}
        select={props.select}
      ></TimeLineItem>
    </TimeLine>
  );
}
