// eslint-disable-next-line
import React, { useState } from "react";
import { Container, Stack } from "@mui/material";
import {
  AlternateEmailOutlined,
  PhoneIphoneOutlined,
  ApartmentOutlined,
  DoneAllOutlined,
} from "@mui/icons-material";

import Banner from "../Banner/Banner";
import DatePickers from "../Components/DatePicker/DatePickers";
import TextFields from "../Components/TextField/TextFields";
import Buttons from "../Components/Button/Buttons";

function Form({ icon, text }) {
  return (
    <>
      <Banner />
      <Container fixed>
        <Stack spacing={2}>
          <h2>Survey Form</h2>

          <TextFields label="Full Name" />
          <DatePickers label="Day of Birth" defaultValue="YY" />
          <TextFields label="Email" icon={<AlternateEmailOutlined />} />
          <TextFields label="Phone" icon={<PhoneIphoneOutlined />} />
          <TextFields label="Position" icon={<ApartmentOutlined />} />
          <br />
          <Buttons
            variant="contained"
            color="success"
            text="Submit"
            endIcon={<DoneAllOutlined />}
            onClick={() => {
              alert("clicked");
            }}
          />
          {/* <Buttons href="/datalist" text="Data List" />
              <Buttons href="/wheelspinner" text="Wheel Snipper" /> */}
          <br />
        </Stack>
      </Container>
    </>
  );
}

export default Form;
