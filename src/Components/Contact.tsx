import * as React from "react";
import { TextField, Typography, Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

type AppProps = {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    userName: string;
    age: number;
    email: string;
    phone: number;
  };
  handleBack: () => void;
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

export default function Contact({
  handleBack,
  handleNext,
  checked,
  handleChange,
  formData,
  setFormData,
}: AppProps) {
  return (
    <>
      <Root className="">
        <Typography variant="h5" className="text-center">
          Contact Information
        </Typography>
        <Typography variant="subtitle2" className="text-gray-400 text-center">
          Please enter your Phone number or Email address
        </Typography>
        <div className="flex flex-col items-center">
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <Divider>or</Divider>
        <div className="flex flex-col items-center">
          <TextField
            type="number"
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            value={formData.phone}
            required
            onChange={(e) =>
              setFormData({ ...formData, phone: Number(e.target.value) })
            }
          />
        </div>
        <div className="flex items-center">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography variant="subtitle2" className="text-gray-400 text-center">
            By checking this box you agree our terms and conditions.
          </Typography>
        </div>
      </Root>
      <button onClick={handleBack} className="bg-gray-200">
        BACK1
      </button>
      <button onClick={handleNext} className="bg-gray-500">
        NEXT2
      </button>
    </>
  );
}
