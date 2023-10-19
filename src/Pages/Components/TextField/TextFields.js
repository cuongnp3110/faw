import * as React from "react";
import { TextField, InputAdornment } from "@mui/material";

export default function TextFields({
  label,
  value,
  onChange,
  icon,
  name,
  error,
  helperText,
  disabled,
  placeholder
}) {
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
      name={name}
      variant="outlined"
      error={error}
      helperText={helperText}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
}
