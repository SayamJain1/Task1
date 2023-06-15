import * as React from "react";
import {
  Container,
  Box,
  Button,
  Stepper,
  Step,
  StepButton,
} from "@mui/material";
import { useState } from "react";
import Contact from "./Components/Contact";
import InfoPage from "./Components/InfoPage";
import OtpPage from "./Components/OtpPage";
import ModalSubmit from "./Components/ModalSubmit";

const steps = ["Information", "Contact", "Varification"];

type FormData = { userName: string; age: number; email: string; phone: number };

export default function MyApp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed] = React.useState<{
    [k: number]: boolean;
  }>({});

  const [formData, setFormData] = useState<FormData>({
    userName: "",
    age: 0,
    email: "",
    phone: 0,
  });

  const [checked, setChecked] = useState<boolean>(false);
  const [checkOtp, setCheckOtp] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  // checkbox
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
      isLastStep() && !allStepsCompleted() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleFirstStep = () => {
    setActiveStep(0);
    setOpen(false);
    setFormData({ userName: "", age: 0, email: "", phone: 0 });
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

          <>
            {activeStep === 0 && (
              <InfoPage
                handleNext={handleNext}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {activeStep === 1 && (
              <Contact
                handleBack={handleBack}
                handleNext={handleNext}
                checked={checked}
                handleChange={handleChange}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {activeStep === 2 && (
              <OtpPage
                handleBack={handleBack}
                setOpen={setOpen}
                checkOtp={checkOtp}
                setCheckOtp={setCheckOtp}
              />
            )}
            {/* {activeStep === 3 && <ModalSubmit />} */}

            {/* Modal */}
            {open && (
              <ModalSubmit
                open={open}
                setOpen={setOpen}
                formData={formData}
                handleFirstStep={handleFirstStep}
              />
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

              {activeStep !== 2 ? (
                <Button
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                  disabled={activeStep === 1 && !checked ? true : null}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  sx={{ mr: 1 }}
                  disabled={activeStep === 2 ? checkOtp : false}
                >
                  Submit
                </Button>
              )}
            </Box>
          </>
        </Box>
      </Container>
    </div>
  );
}
