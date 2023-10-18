import React, { Component, useState } from "react";
// import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import WheelComponent from 'react-wheel-of-prizes';
// import 'react-wheel-of-prizes/dist/index.css';
import WheelComponent from "./Wheel";

// import "react-wheel-of-prizes/dist/index.css";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "5%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  alignContent: "center"
};

export default function TransitionsModal({ open, onClose, wheelParam  }) {
  const[gift, setGift] = useState("");
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
  const onFinished = (e) => {
    setGift(e);
    console.log(e);
    wheelParam(e);
  };

  const closeBtn = (e) => {
    onClose(true);
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
        <Fade in={open} 
        style={{width: "", height: "", padding: ""}}
        >
          <Box className="box" sx={style}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={(e) => onFinished(e)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={180}
              upDuration={200}
              downDuration={500}
              fontFamily="Arial"
              
            />
              {gift ? (
                <Button 
                  className="btn"
                  style={{width:"70%", alignContent:"center", marginLeft:"15%"}}
                  variant="contained"
                  onClick={closeBtn} 
                  color="primary"
                >Ok</Button>
              ) : (<></>)}
            
          </Box>
          
        </Fade>
        
      </Modal>
    </Box>
  );
}
