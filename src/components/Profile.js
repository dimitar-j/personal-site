import React from 'react'
import { styled } from '@mui/system';
import Photo from '../assets/ProfileIcon.jpeg'
import LinkedIn from '../assets/linkedinBlack.png'
import Resume from '../assets/resumeBlack.png'
import GitHub from '../assets/githubBlack.png'
import GridPhoto from '../assets/blackGrid.png'
import ResumePDF from '../assets/DimitarJanevskiResume.pdf'
import GridsDesktop from '../assets/GridsDesktop.png'
import GridsTablet from '../assets/GridsTablet.png'
import GridsMobile from '../assets/GridsMobile.png'
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#fafafa',
    justifyContent: "center",
    paddingTop: "10vw",
    paddingBottom: "5vw",
    backgroundImage: `url(${GridsDesktop})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${GridsTablet})`,
    },
}));

const SocialIconsContainer = styled('div')({
    display: "flex",
    marginTop: "10px",
    marginBottom: "75px",
    gap: "5px"
});

const ProfilePhoto = styled('img')({
    borderRadius: "50%",
    boxShadow: "0px 0px 105px rgba(0, 0, 0, 0.4)",
    margin: "15px 0px"
});

const Grid = styled('img')({
    position: "absolute",
})

export default function Profile() {
    return (
        <section style={{position:"relative"}}>
            {/* <Grid src={GridPhoto} sx={{top: "-20%", left: "-5%"}} width="35%"></Grid>
            <Grid src={GridPhoto} sx={{top: "-320px", right: "-80px"}} width="35%"></Grid>
            <Grid src={GridPhoto} sx={{top: "300px", right: "-350px"}} width="35%"></Grid> */}
            <Container>
                <ProfilePhoto src={Photo} alt="Profile Photo" width="225px" height="225px"></ProfilePhoto>
                <Typography variant="h2" sx={{margin: "10px 20px", textAlign: "center"}}>Hey there! My name is Dimitar 👋</Typography>
                <SocialIconsContainer>
                    <a href="https://www.linkedin.com/in/dimitarjanevski/" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} onClick="https://www.linkedin.com/in/dimitarjanevski/" alt="LinkedIn Icon" width="45px" heigh="45px"></img>
                    </a>
                    <a href={ResumePDF} target="_blank" rel="noreferrer">
                        <img src={Resume} alt="Resume Icon" width="45px" heigh="45px"></img>
                    </a>
                    <a href="https://github.com/dimitar-j" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="GitHub Icon" width="45px" heigh="45px"></img>
                    </a>
                </SocialIconsContainer>
                <Typography variant="h5">
                    Let's go!
                </Typography>
                <ExpandMoreIcon color="black" sx={{fontSize: 40, marginBottom: "1%"}}></ExpandMoreIcon>
            </Container>
            <div class="custom-shape-divider-bottom-1651714942">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        
    )
}
