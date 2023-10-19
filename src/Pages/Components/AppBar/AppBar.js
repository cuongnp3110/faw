import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Buttons from "../../Components/Button/Buttons";

export default function AppBars() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "orange",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          fontWeight="bold"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            paddingLeft: "5%",
          }}
        >
          FSB.CT
        </Typography>

        <Buttons href="#" text="Manage Account" sx={{ color: "white" }} />
      </Toolbar>
    </AppBar>
  );
}
