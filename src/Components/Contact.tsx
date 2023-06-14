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

export default function Contact() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
            // helperText="Username should be less then 20 characters."
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <Divider>or</Divider>
        <div className="flex flex-col items-center">
          <TextField
            type="number"
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
        </div>
        <div className="flex ">
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
    </>
  );
}
