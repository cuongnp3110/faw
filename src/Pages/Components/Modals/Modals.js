import React, { Component } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ open, onClose }) {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              //   winningSegment="won 10"
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={false}
              size={190}
              upDuration={500}
              downDuration={2000}
              fontFamily="Arial"
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
