import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { stepperParser } from '../../util/DateHelper';


 const StatusProgress=({t, lastState}:any)=> {
    const steps = [
        t("TICKET_CREATED"),
        t("PACKAGE_RECEIVED"),
        t("OUT_FOR_DELIVERY"),
        t("DELIVERED")
      ];
    

  return (
    <Box sx={{ width: '100%', padding:'10px 0px'}}>
      <Stepper activeStep={stepperParser(lastState)} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
             sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'secondary.dark', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'green', // Just text label (COMPLETED)
                    fontWeight:'400'
                  },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'secondary.main', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'grey', // Just text label (ACTIVE)
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'black', // circle's number (ACTIVE)
                },
              }}
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StatusProgress;