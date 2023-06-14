import * as React from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepButton,
} from "@mui/material";
import { useState } from "react";
import Contact from "./Components/Contact";
// import { flexbox } from "@mui/system";

const steps = ["Information", "Contact", "Varification"];

export default function MyApp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const [userName, setUserName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="bg-slate-400 h-screen pt-20">
      <Container maxWidth="sm">
        <Box
          className="bg-white p-14 flex flex-col gap-5 justify-center items-center rounded-lg"
          sx={{ justifyContent: "center" }}
        >
          <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          {/* ///////////////////// */}
          {/* <div> */}
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  Step {activeStep + 1}
                </Typography> */}

              {activeStep === 0 && (
                <Contact />
                // <>
                //   <Typography variant="h5">Personal Information</Typography>
                //   <Typography
                //     variant="subtitle2"
                //     className="text-gray-400 text-center"
                //   >
                //     Please enter your Username and Age information{" "}
                //   </Typography>
                //   <TextField
                //     error={userName.length > 20}
                //     type="text"
                //     // helperText="Username should be less then 20 characters."
                //     id="outlined-basic"
                //     label="Username"
                //     variant="outlined"
                //     value={userName}
                //     onChange={(e) => setUserName(e.target.value)}
                //   />
                //   <TextField
                //     type="number"
                //     id="outlined-basic"
                //     label="Age"
                //     variant="outlined"
                //     value={age}
                //     onChange={(e) => setAge(Number(e.target.value))}
                //   />
                // </>
              )}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            </>
          )}
          {/* </div> */}
          {/* ///////////////////// */}

          {/* <Button
            onClick={() => {
              alert(`name is ${userName} and age is ${age}`);
            }}
            variant="contained"
          >
            Continue
          </Button> */}
        </Box>
      </Container>
    </div>
  );
}
