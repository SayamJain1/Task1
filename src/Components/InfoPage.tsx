import * as React from "react";
import { TextField, Typography } from "@mui/material";

type FormProps = {
  formData: {
    userName: string;
    age: number;
    email: string;
    phone: number;
  };
  handleNext: () => void;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      age: number;
      email: string;
      phone: number;
    }>
  >;
};

export default function InfoPage({
  formData,
  setFormData,
  handleNext,
}: FormProps) {
  return (
    <>
      <Typography variant="h5">Personal Information</Typography>
      <Typography variant="subtitle2" className="text-gray-400 text-center">
        Please enter your Username and Age information{" "}
      </Typography>
      <TextField
        type="text"
        required
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
      <TextField
        type="number"
        required
        id="outlined-basic"
        label="Age"
        variant="outlined"
        value={formData.age}
        onChange={(e) =>
          setFormData({ ...formData, age: Number(e.target.value) })
        }
      />
      <button onClick={handleNext} className="bg-gray-500">
        NEXT1
      </button>
    </>
  );
}
