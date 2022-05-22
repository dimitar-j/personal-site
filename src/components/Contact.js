import React from 'react'
import { styled } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Character from '../assets/Saly-2.png'

const Container = styled('div')(({theme}) => ({
    paddingLeft: "10%",
    paddingRight:"10%",
    marginBottom:"75px",
}))

const Subtitle = styled('Typography')(({theme}) => ({
    color:"#fafafa",
    fontSize: "clamp(1.1rem, 1vw + 0.5rem, 1.1rem)",
    marginTop:"200px"
}))


export default function Contact() {
    return (
        <Container>
            <Typography variant="h1" style={{color:"#fafafa"}}>
                Contact
            </Typography>
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        alignItems:"flex-end"
                    }}
                >
                    <Grid container spacing={{xs:1, md:2}}>
                        <Grid item xs={12}>
                            <Subtitle variant="span">
                                Let's get in touch!
                            </Subtitle>
                        </Grid>
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12}>
                            <TextField 
                                    id="filled-basic" 
                                    fullWidth 
                                    variant="filled" 
                                    placeholder="Your Message..."
                                    InputProps={{ disableUnderline: true, style:{height:"300px", alignItems:"flex-start", paddingLeft:"25px", paddingRight:"25px"} }}
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
                                    rows={11}
                                    />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid 
                    item 
                    xs={0}
                    md={4} 
                    sx={{
                        display: { xs: "none", md: "inline-block" }
                    }}>
                    <img src={Character} height="400px" width="auto"></img>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
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
                </Grid>
            </Grid>
        </Container>
    )
}
