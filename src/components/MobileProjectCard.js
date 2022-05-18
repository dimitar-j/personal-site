import React from 'react'
import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Tune } from '@mui/icons-material';

const Card = styled('div')(({theme}) => ({
    backgroundColor: "#282828",
    borderRadius:  "10px",
    height: "350px",
    padding: "10% 10% 5% 10%",
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-between",
    color:"#fafafa",
    transition: "all .1s ease-out",
}))

const SocialContainer = styled('div')(({theme}) => ({
    borderTop: "1px solid #fafafa",
    display:"flex",
    position:"relative",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"10%",
    padding: "20px 0 0 0",
    gap:"20px",
}))

const TextContainer = styled('div')(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    gap:"10px"
}))

const Title = styled('Typography')(({theme}) => ({
    fontSize: "clamp(1.5rem, 1vw + 0.8rem, 1.8rem)",
    fontWeight: 600,
}))

const Description = styled('Typography')(({theme}) => ({
    fontSize: "clamp(0.9rem, 1vw + 0.6rem, 1.1rem)",
    fontWeight: 300,
}))

export default function DesktopProjectCard(props) {
    return (
            <Card>
                <TextContainer>
                    <Title>
                        {props.content["name"]}
                    </Title>
                    <Description>
                        {props.content["description"]}
                    </Description>
                </TextContainer>
                <SocialContainer>
                    {props.content.links.map((link) => 
                        <a href={link.url}>
                            <img src={link.icon} width="40px" height="40px"></img>
                        </a>
                    )}
                </SocialContainer>
            </Card>
    )
}
