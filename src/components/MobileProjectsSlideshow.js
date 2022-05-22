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
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    swiper: {
        height:"fit-content",
        "& > div": {
            alignItems: "center",
            minHeight: "425px",
            '@media (max-width:450px)': {
                minHeight: "500px",
            },
        }
    },
    stepper: {
        paddingTop:"20px",
        backgroundColor: "rgba(0,0,0,0)",
        justifyContent:"center",
        "& .MuiMobileStepper-dots":{
            "& .MuiMobileStepper-dot":{
                backgroundColor: "rgba(100, 100, 100, 0.7)"
            },
            "& .MuiMobileStepper-dotActive":{
                backgroundColor:"#fafafa"
            },
        }
    },
    buttonContainer: {
        position: "absolute",
        display:"flex",
        justifyContent:"space-between",
        top: "47%",
        width:"100%",
        "transform": "translateY(-50%)",
        "-ms-transform": "translateY(-50%)",
        "-moz-transform": "translateY(-50%)",
        "-webkit-transform": "translateY(-50%)",
        "-o-transform": "translateY(-50%)"
    },
    button: {
        margin:"0 6%",
        borderRadius: "100%",
        color:"white",
        width:"50px",
        height:"50px",
        backgroundColor:"rgba(100, 100, 100, 0.7)",
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        transition: "all .1s ease-out",
        "&:disabled":{
            backgroundColor:"rgba(100, 100, 100, 0.2)",
            color:"rgba(255,255,255,0.5)",
        },
        "&:hover":{
            cursor: "pointer",
            transform:"scale(1.1)",
            "&:disabled":{
                backgroundColor:"rgba(100, 100, 100, 0.2)",
                color:"rgba(255,255,255,0.5)",
                transform:"scale(1)",
                cursor: "default",
            },
        }
    },
  }));

export default function MobileProjectsSlideshow() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = content.length;
    const classes = useStyles();
  
    function renderButtonContainer() {
        return(
            <div className={classes.buttonContainer}>
                {renderPrevButton()}
                {renderNextButton()}
            </div>
        )
    }

    function renderPrevButton() {
        return(
            <button className={classes.button} onClick={handleBack} disabled={(activeStep === 0)}>
                <ChevronLeftIcon></ChevronLeftIcon>
            </button>
        )
    }

    function renderNextButton() {
        return(
            <button className={classes.button} onClick={handleNext} disabled={(activeStep === maxSteps - 1)}>
                <ChevronRightIcon></ChevronRightIcon>
            </button>
        )
    }

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
        <div style={{ position:"relative", marginTop:"30px"}}>
            <AutoPlaySwipeableViews
                axis='x'
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                className={classes.swiper}
            >
                {content.map((step, index) => (
                <div key={step.title} style={{padding:"0 10%"}}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <MobileProjectCard content={step}></MobileProjectCard>
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            {renderButtonContainer()}
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.stepper}
                variant="dots"
                nextButton={
                    renderNextButton
                }
                backButton={
                    renderPrevButton
                }
            />
        </div>
    )
}
