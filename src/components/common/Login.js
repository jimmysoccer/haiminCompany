import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { getLoginAuth } from "../../services/get-login-auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await getLoginAuth(username, password);
    console.log("res", res);
    window.location.href = "/home";
  };
  return (
    <div className="container">
      <Grid container className="my-5 d-flex justify-content-center">
        <Grid item>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Login
            </Typography>
            <form
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
