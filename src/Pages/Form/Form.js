// eslint-disable-next-line
import React, { useState, useContext } from "react";
import { Container, Stack, Button } from "@mui/material";
import {
  AlternateEmailOutlined,
  PhoneIphoneOutlined,
  ApartmentOutlined,
  DoneAllOutlined,
  CardGiftcardOutlined,
  CelebrationOutlined,
  ContactEmergencyOutlined,
} from "@mui/icons-material";

import Banner from "../Banner/Banner";
import TextFields from "../Components/TextField/TextFields";
import Buttons from "../Components/Button/Buttons";
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

  const handleSubmit = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const loginForm = async (e) => {
    e.preventDefault();
    try {
      const formData = await submitForm(form);
      console.log(formData);
    } catch (error) {
      console.log(error);
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
            <TextFields
              name="gift"
              label="Gift"
              icon={
                <Buttons
                  startIcon={<CardGiftcardOutlined />}
                  onClick={handleOpen}
                  color="primary"
                  text="Select Gift"
                  // style={{border: "1px solid"}}
                />
              }
              disabled={true}
              onChange={handleSubmit}
              value={gift}
            />
            <br />
            <Buttons
              variant="text"
              type="submit"
              text="Submit"
              color="success"
              variant="contained"
              endIcon={<DoneAllOutlined />}
            />
            <br />

            <TransitionsModal open={open} onClose={handleClose} />
          </Stack>
        </Container>
      </form>
    </>
  );
}

export default Form;
