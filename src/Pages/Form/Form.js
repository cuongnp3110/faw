// eslint-disable-next-line
import React, { useState, useEffect, useContext } from "react";
import { Container, Stack } from "@mui/material";
import {
  AlternateEmailOutlined,
  PhoneIphoneOutlined,
  ApartmentOutlined,
  DoneAllOutlined,
  CardGiftcardOutlined,
  CelebrationOutlined,
  ContactEmergencyOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

import Banner from "../Banner/Banner";
import TextFields from "../Components/TextField/TextFields";
// import Buttons from "../Components/Button/Buttons";
import TransitionsModal from "../Components/Modals/Modals";
import { authContext } from "../Components/contexts/auth.context";

function Form({ icon, text, name }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { submitForm } = useContext(authContext);

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    position: "",
    gift: "",
  });

  const { fullName, dob, email, phone, position, gift } = form;

  const handleSubmit = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const getPropWheelValue = (e) => setForm({ ...form, gift: e});

  const [buttonStatus, setButtonStatus] = useState(true);
  useEffect(() => {
    if (form.fullName === "" ||
        form.dob === "" || 
        form.email === "" || 
        form.phone === "" || 
        form.position === "" || 
        form.gift === "") {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  },[form]);

  const loginForm = async (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const phoneNumberRegex = /^[0-9]{10}$/;
    const onlyText = /\D/;
    if(!onlyText.test(form.fullName)){
      alert("Invalid Name");
    } else if(!emailRegex.test(form.email)){
      alert("Invalid Email");
    } else if(!phoneNumberRegex.test(form.phone)){
      alert("Invalid Phone Number");
    } else {
      try {
        const formData = await submitForm(form);
        console.log(formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Banner />
      <form onSubmit={loginForm}>
        <Container fixed>
          <Stack spacing={2}>
            <br />
            <TextFields
              name="fullName"
              label="Full Name"
              icon={<ContactEmergencyOutlined />}
              onChange={handleSubmit}
              value={fullName}
              error={text === ""}
              helperText={text === "" ? "Empty field!" : " "}
            />
            {/* Config datepicker */}
            <TextFields
              name="dob"
              label="Date of Birth"
              icon={<CelebrationOutlined />}
              onChange={handleSubmit}
              value={dob}
            />
            <TextFields
              name="email"
              label="Email"
              icon={<AlternateEmailOutlined />}
              onChange={handleSubmit}
              value={email}
            />
            <TextFields
              name="phone"
              label="Phone"
              icon={<PhoneIphoneOutlined />}
              onChange={handleSubmit}
              value={phone}
            />
            <TextFields
              name="position"
              label="Position"
              icon={<ApartmentOutlined />}
              onChange={handleSubmit}
              value={position}
            />
            <Button
                  style={{width: '100%', height: '56px'}}
                  startIcon={<CardGiftcardOutlined />}
                  onClick={form.gift ? () => {} : handleOpen}
                  color="primary"
                  text="Select Gift"
                  variant="contained"
                >{form.gift ? "Prize: " + form.gift : "Spinning the wheel to get the gift"}</Button>
            <br />
            <Button
              type="submit"
              text="Submit"
              color="success"
              variant="contained"
              disabled={buttonStatus}
              endIcon={<DoneAllOutlined />}
            >Submit
            </Button>

            <br />

            <TransitionsModal open={open} onClose={handleClose} wheelParam={getPropWheelValue}/>
          </Stack>
        </Container>
      </form>
    </>
  );
}

export default Form;
