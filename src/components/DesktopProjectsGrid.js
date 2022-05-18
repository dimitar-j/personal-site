import React from 'react'
import { Grid, Typography } from '@mui/material';
import content from './project_data.js'
import DesktopProjectCard from './DesktopProjectCard.js'
import { styled } from '@mui/system';

export default function DesktopProjectsGrid() {
    return (
        <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        style={{marginTop:"30px"}}
        >
            {content.map((project) => 
                <DesktopProjectCard content={project}></DesktopProjectCard>
            )}
        </Grid>
    )
}
