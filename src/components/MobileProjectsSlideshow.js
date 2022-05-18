import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileProjectCard from './MobileProjectCard.js'
import content from './project_data.js'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function MobileProjectsSlideshow() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = content.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
        <div>
            <AutoPlaySwipeableViews
                axis='x'
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {content.map((step, index) => (
                <div key={step.title}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <MobileProjectCard content={step}></MobileProjectCard>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    <KeyboardArrowRight />
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                </Button>
                }
            />
        </div>
    )
}
