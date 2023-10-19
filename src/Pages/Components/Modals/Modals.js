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

export default function TransitionsModal({
  open,
  onClose,
  wheelParam,
  transferData,
}) {
  const [buttonStatus, setButtonStatus] = useState(false);
  const segments = [
    "Móc khóa xinh",
    "Voucher FSB 20%",
    "Ly nước FSB",
    "Voucher FSB 25%",
    "Voucher New Windowns",
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
  let data = JSON.parse(JSON.stringify(transferData, null, 2));
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    position: "",
    gift: "",
  });
  const { submitForm } = useContext(authContext);
  const onFinished = (e) => {
    setButtonStatus(true);
    setForm({ ...form, fullName: data.fullName });
    setForm({ ...form, dob: data.dob });
    setForm({ ...form, email: data.email });
    setForm({ ...form, phone: data.phone });
    setForm({ ...form, position: data.position });
    setForm({ ...form, gift: e });
    wheelParam(e);
  };

  const closeBtn = async (e) => {
    try {
      const formData = await submitForm(form);
      if (formData.success) console.log(formData.message);
      else console.log(formData.message);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
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
