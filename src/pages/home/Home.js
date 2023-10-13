import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

import "./Home.css";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar className="tool-bar-cus">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 2 }}>
            FSB
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
