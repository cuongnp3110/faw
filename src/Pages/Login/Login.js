import React, { useState, useContext } from "react";
import { Container } from "@mui/material";
// import Buttons from "../Components/Button/Buttons";
// import TextFields from "../Components/TextField/TextFields";
import { TextField, Button } from "@mui/material";
import { authContext } from "../Components/contexts/auth.context";
const Login = ({ value, text, label }) => {
  //Context
  const { loginUser } = useContext(authContext);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const { username, password } = login;

  const handleLogin = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  const loginForm = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(login);
      if(loginData.success) {
        sessionStorage.setItem('username', login.username);
        window.location.assign("/datalist");
      } else {
        console.log(loginData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <br />
      <form onSubmit={loginForm}>
        <TextField
          id="outlined-controlled"
          label="Username"
          name="username"
          value={username}
          onChange={handleLogin}
        />
        <TextField
          id="outlined-controlled"
          label="Password"
          name="password"
          value={password}
          onChange={handleLogin}
        />
        <Button variant="text" type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
