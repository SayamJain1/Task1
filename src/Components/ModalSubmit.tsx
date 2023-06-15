import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

type ModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleFirstStep: () => void;
  formData: {
    userName: string;
    age: number;
    email: string;
    phone: number;
  };
};

export default function ModalSubmit({
  open,
  setOpen,
  handleFirstStep,
  formData,
}: ModalType) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="rounded-md">
            <div className="flex justify-end">
              <div className="bg-gray-100 hover:bg-slate-200 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <button onClick={handleClose} className="text-xl">
                  X
                </button>
              </div>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {`Thankyou for sharing your information like your Name - ${formData.userName}, Age - ${formData.age} and Email ${formData.email}`}
            </Typography>
            <div className="mt-4">
              <Button variant="contained" onClick={handleFirstStep}>
                Okay
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
