import * as React from "react";
import { Button } from "@mui/material";

export default function Buttons({
  text,
  disabled,
  href,
  variants,
  onClick,
  color,
  startIcon,
  endIcon,
  sx,
  type,
}) {
  return (
    <Button
      variant={variants}
      disable={disabled}
      href={href}
      onClick={onClick}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      type={type}
    >
      {text}
    </Button>
  );
}
