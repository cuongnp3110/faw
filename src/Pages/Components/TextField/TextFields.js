import * as React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function TextFields({ label, value, onChange, icon }) {
  return (
    <TextField
      id="outlined-basic"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  );
}
