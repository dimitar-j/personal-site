import React from 'react'
import { styled } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Character from '../assets/Saly-2.png'
import CharacterV2 from '../assets/Saly-2-cropped.png'

const Container = styled('div')(({theme}) => ({
    paddingLeft: "10%",
    paddingRight:"10%",
    marginBottom:"75px",
    position: "relative",
}))

const Subtitle = styled('Typography')(({theme}) => ({
    color:"#fafafa",
    fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.1rem)",
}))

const ImageContainer = styled('div')(({theme}) => ({
    position:"absolute",
    top:"-35px",
    right:"0",
    width:"35%",
    "@media (max-width: 1179px)": {
        display:"none"
    }
}))


export default function Contact() {
    return (
        <Container>
            <Typography variant="h1" style={{color:"#fafafa"}}>
                Contact
            </Typography>
            <Subtitle variant="span">
                Let's get in touch!
            </Subtitle>
            <Grid container rowSpacing={2} columnSpacing={2} sx={{
                paddingTop:"20px", 
                width:"65%",
                marginLeft:"0",
                "@media (max-width: 1179px)":{
                    width:"100%"
                }
            }}>
                <Grid item xs={12} md={6} sx={{
                    "&.MuiGrid-item":{
                        "@media (max-width: 899px)":{
                            paddingLeft:"0px",
                            paddingRight:"0px"
                        },
                        "@media (min-width: 900px)":{
                            paddingLeft:"0px",
                            paddingRight:"5px"
                        }
                    }
                }}>
                    <TextField 
                        id="filled-basic" 
                        fullWidth 
                        variant="filled" 
                        placeholder="Name"
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            input: {
                                color:"#fafafa",
                                backgroundColor:"#282828",
                                borderRadius:"15px",
                                padding:"20px 25px",
                                }
                            }}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    "&.MuiGrid-item":{
                        "@media (max-width: 899px)":{
                            paddingLeft:"0px",
                            paddingRight:"0px"
                        },
                        "@media (min-width: 900px)":{
                            paddingLeft:"5px"
                        }
                    }
                }}>
                    <TextField 
                            id="filled-basic" 
                            fullWidth 
                            variant="filled" 
                            placeholder="Email"
                            InputProps={{ disableUnderline: true }}
                            sx={{
                                input: {
                                    color:"#fafafa",
                                    backgroundColor:"#282828",
                                    borderRadius:"15px",
                                    padding:"20px 25px",
                                    }
                                }}/> 
                </Grid>
                <Grid item xs={12} sx={{
                    "&.MuiGrid-item":{
                        paddingLeft:"0px"
                    }
                }}>
                    <TextField 
                            id="filled-basic" 
                            fullWidth 
                            variant="filled" 
                            placeholder="Your Message..."
                            InputProps={{ disableUnderline: true, style:{height:"200px", alignItems:"flex-start", paddingLeft:"25px", paddingRight:"25px"} }}
                            sx={{
                                backgroundColor:"#282828",
                                borderRadius:"15px",
                                input: {
                                    color:"#fafafa",
                                    backgroundColor:"#282828",
                                },
                                textArea: {
                                    color:"#fafafa"
                                },
                            }} 
                            multiline
                            rows={7}
                            />
                </Grid>
            </Grid>
            <ImageContainer>
                <img src={CharacterV2} height="100%" width="300vw"></img>
            </ImageContainer>
            <Button 
                variant="Contained"
                sx={{
                    backgroundColor:"#F74C4C",
                    color:"#fafafa",
                    "&:hover":{
                        backgroundColor:"#F74C4C",
                    },
                    width:"100%",
                    height:"50px",
                    borderRadius:"15px",
                    marginTop:"20px"
                }}
                endIcon={<MailOutlineIcon></MailOutlineIcon>}
            >
                Send Email
            </Button>
        </Container>
    )
}
