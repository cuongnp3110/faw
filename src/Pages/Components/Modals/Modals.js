import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import WheelComponent from "./Wheel";
import { authContext } from "../contexts/auth.context";

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
  alignContent: "center",
};

export default function TransitionsModal({open, onClose, wheelParam, transferData}) {
  const [buttonStatus, setButtonStatus] = useState(false);
  const segments = [
    "Móc khóa xinh",
    "Voucher FSB 20%",
    "Ly nước FSB",
    "Voucher FSB 25%",
    "Voucher New Windows",
    "Voucher FPT Shop",
    "Voucher FSB 30%",
    "Túi vải",
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
  const randList = [
    [
      "Túi vải",
      "Ly nước FSB",
      "Voucher FSB 30%",
      "Voucher FSB 25%",
      "Voucher FSB 20%",
      "Voucher New Windows",
      "Voucher FPT Shop",
      "Móc khóa xinh",
    ], [
      3,
      5,
      94,
      47,
      70,
      20,
      20,
      120,
    ]
  ];

  function calculateItemProbabilities(arr) {
    const quantities = arr;
    const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);
    const itemProbabilities = quantities.map(quantity => (quantity / totalQuantity));
    return itemProbabilities;
  }


  function getRandomElementWithProbability(arr, probabilities) {
    if (arr.length !== probabilities.length) throw new Error("Số lượng phần tử trong mảng và mảng xác suất phải giống nhau");
    const totalProbability = probabilities.reduce((acc, prob) => acc + prob, 0);
    const randomValue = Math.random() * totalProbability;
    let cumulativeProbability = 0;
    for (let i = 0; i < arr.length; i++) {
      cumulativeProbability += probabilities[i];
      if (randomValue < cumulativeProbability) {
          return arr[i];
      }
    }
  }


  const { submitForm } = useContext(authContext);
  const onFinished = async (e) => {
    setButtonStatus(true);
    wheelParam(e);
    const form = {
      fullName: transferData.fullName,
      dob: transferData.dob,
      email: transferData.email,
      phone: transferData.phone,
      position: transferData.position,
      gift: e,
    };
    console.log(JSON.stringify(form));
    try {
      const formData = await submitForm(form);
      if (formData.success) console.log(formData.message);
      else console.log(formData.message);
    } catch (error) {
      console.log(error);
    }
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
        <Fade in={open} style={{ width: "", height: "", padding: "" }}>
          <Box className="box" sx={style}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              onFinished={(e) => onFinished(e)}
              winningSegment={getRandomElementWithProbability(randList[0], calculateItemProbabilities(randList[1]))}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={true}
              size={180}
              upDuration={200}
              downDuration={500}
              fontFamily="Arial"
            />
            {buttonStatus ? (
              <Button
                className="btn"
                style={{
                  width: "70%",
                  alignContent: "center",
                  marginLeft: "15%",
                }}
                variant="contained"
                onClick={closeBtn}
                color="primary"
              >
                Ok
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
