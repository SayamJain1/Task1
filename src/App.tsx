import * as React from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useState } from "react";
// import { flexbox } from "@mui/system";

const steps = ["Information", "Contact", "Varification"];

export default function MyApp() {
  const [userName, setUserName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  return (
    <div className="bg-slate-400 h-screen pt-20">
      <Container maxWidth="sm">
        <Box
          className="bg-white p-14 flex flex-col gap-5 justify-center items-center rounded-lg"
          sx={{ justifyContent: "center" }}
        >
          <Stepper activeStep={1} alternativeLabel className="w-full p-1">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h5">Personal Information</Typography>
          <Typography variant="subtitle2" className="text-gray-400 text-center">
            Please enter your Username and Age information{" "}
          </Typography>
          <TextField
            error={userName.length > 20}
            type="text"
            helperText="Username should be less then 20 characters."
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            type="number"
            id="outlined-basic"
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Button
            onClick={() => {
              alert(`name is ${userName} and age is ${age}`);
            }}
            variant="contained"
          >
            Continue
          </Button>
        </Box>
      </Container>
    </div>
  );
}
