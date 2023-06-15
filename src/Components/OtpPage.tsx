import * as React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

type OtpProps = {
  checkOtp: boolean;
  setCheckOtp: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handleBack: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OtpPage({
  setOpen,
  handleBack,
  setCheckOtp,
}: OtpProps) {
  const [value, setValue] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    setOtp(String(Math.floor(1000 + Math.random() * 9000)));
  }, []);

  const handleSandOtp = () => {
    alert(otp);
  };
  const handleComplete = (finalValue: string) => {
    if (finalValue === otp) {
      alert("It matches");
      setCheckOtp(false);
    }
  };
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <MuiOtpInput
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
        length={4}
      />
      <Button variant="contained" onClick={handleSandOtp}>
        Sand OTP
      </Button>
      <button className="bg-gray-400" onClick={handleBack}>
        Back
      </button>
      <button className="bg-gray-400" onClick={() => setOpen(true)}>
        Submit
      </button>
    </>
  );
}
