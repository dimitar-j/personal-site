import React from 'react'
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MediaQuery from 'react-responsive'
import DesktopProjectsGrid from './DesktopProjectsGrid.js';
import MobileProjectsSlideshow from './MobileProjectsSlideshow.js';

export default function Projects() {
    return (
        <div style={{padding:"5% 10% 10% 10%"}}>
            <Typography gutterBottom variant="h1" style={{color:"#fafafa"}}>
                Projects
            </Typography>
            <MediaQuery minWidth={1180}>
                <DesktopProjectsGrid></DesktopProjectsGrid>
            </MediaQuery>
            <MediaQuery maxWidth={1179}>
                <MobileProjectsSlideshow></MobileProjectsSlideshow>
            </MediaQuery>
        </div>
    )
}
