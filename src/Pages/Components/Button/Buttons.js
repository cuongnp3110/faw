import * as React from "react";
import { Button } from "@mui/material";

export default function Buttons({
  text,
  disabled,
  href,
  variant,
  onClick,
  color,
  startIcon,
  endIcon,
}) {
  return (
    <Button
      variant={variant}
      disable={disabled}
      href={href}
      onClick={onClick}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
}
