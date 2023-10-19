// eslint-disable-next-line
import React, { useState, useEffect } from "react";
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
import TransitionsModal from "../Components/Modals/Modals";

function Form({ icon, text, name }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);


  // const { submitForm } = useContext(authContext);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorDob, setErrorDob] = useState("");
  
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    position: "",
  });

  const [buttonStatus, setButtonStatus] = useState(true);
  const [wheeled, setWheeled] = useState("");
  const { fullName, dob, email, phone, position } = form;

  const handleSubmit = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const getPropWheelValue = (e) => setWheeled(e);

  useEffect(() => {
    if (form.fullName === "" ||
        form.dob === "" || 
        form.email === "" || 
        form.phone === "" || 
        form.position === "") {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  },[form]);

  const loginForm = async (e) => {
    e.preventDefault();
    const onlyText = /\D/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    const phoneNumberRegex = /^[0-9]{10}$/;
    var valid = true;
    
    if(!onlyText.test(form.fullName)){
      setErrorName("| MESSAGE: INVALID NAME");
      valid = false;
    } else {
      setErrorName("");
    }
    if(!datePattern.test(form.dob)){
      setErrorDob("| MESSAGE: INVALID DATE OF BIRTH");
      valid = false;
    } else {
      setErrorDob("");
    }
    if(!emailRegex.test(form.email)){
      setErrorEmail("| MESSAGE: INVALID EMAIL");
      valid = false;
    } else {
      setErrorEmail("");
    }
    if(!phoneNumberRegex.test(form.phone)){
      setErrorPhone("| MESSAGE: INVALID PHONE NUMBER");
      valid = false;
    }  else {
      setErrorPhone("");
    }
    if(valid) {
      setOpen(true);
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
              label={`Full Name ${errorName}`}
              icon={<ContactEmergencyOutlined />}
              onChange={handleSubmit}
              value={fullName}
              error={text === ""}
              helperText={text === "" ? "Empty field!" : " "}
              disabled={wheeled}
            />
            {/* Config datepicker */}
            <TextFields
              name="dob"
              label={`Date of Birth ${errorDob}`}
              icon={<CelebrationOutlined />}
              onChange={handleSubmit}
              value={dob}
              placeholder="dd/mm/yyyy"
              disabled={wheeled}
            />
            <TextFields
              name="email"
              label={`Email ${errorEmail}`}
              icon={<AlternateEmailOutlined />}
              onChange={handleSubmit}
              value={email}
              placeholder="example@fsb.com"
              disabled={wheeled}
            />
            <TextFields
              name="phone"
              label={`Phone ${errorPhone}`}
              icon={<PhoneIphoneOutlined />}
              onChange={handleSubmit}
              value={phone}
              placeholder="xxxxxxxxxxx (11 digits)"
              disabled={wheeled}
            />
            <TextFields
              name="position"
              label="Position"
              icon={<ApartmentOutlined />}
              onChange={handleSubmit}
              value={position}
              disabled={wheeled}
            />
            {wheeled ? 
              <TextFields
              name="gift"
              label="Gift"
              icon={<CardGiftcardOutlined />}
              onChange={handleSubmit}
              value={wheeled}
              disabled={wheeled}
              />
            : <></>}
            <br />
            <Button
              type="submit"
              text="Submit"
              color="success"
              variant="contained"
              disabled={buttonStatus || wheeled ? true : false}
              endIcon={<DoneAllOutlined />}
            >{wheeled ? "Your prize is selected, thank you" : "Submit and select the prize"}
            </Button>

            <br />

            <TransitionsModal open={open} onClose={handleClose} wheelParam={getPropWheelValue} transferData={form}/>
          </Stack>
        </Container>
      </form>
      {/* {formSuccess ? <div className=""></div> : <></>} */}
    </>
  );
}

export default Form;
