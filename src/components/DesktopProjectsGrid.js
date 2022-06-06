import React from 'react'
import { Grid, Typography } from '@mui/material';
import content from './project_data.js'
import DesktopProjectCard from './DesktopProjectCard.js'
import { styled } from '@mui/system';

export default function DesktopProjectsGrid() {
    return (
        <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
        style={{marginTop:"30px" , padding:"0% 10% 0% 10%"}}
        >
            {content.map((project) => 
                <DesktopProjectCard content={project}></DesktopProjectCard>
            )}
        </Grid>
    )
}
