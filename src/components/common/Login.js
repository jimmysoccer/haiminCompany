import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { getLoginAuth } from "../../services/get-login-auth";
import { useAtom } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR, VISITOR } from "../../constants/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessRole, setAccessRole] = useAtom(accessRoleAtom);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await getLoginAuth(username, password);
      if (res.status === 200) {
        setAccessRole(EDITOR);
        navigate("/home");
      } else {
        setAccessRole(VISITOR);
        setLoginError(true);
      }
    } catch (error) {
      console.error("get login auth error", error);
      setAccessRole(VISITOR);
      setLoginError(true);
    }
  };
  return (
    <div className="container">
      <Grid container className="my-5 d-flex justify-content-center">
        <Grid item>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              {accessRole === EDITOR ? "您的账户" : "用户登录"}
            </Typography>
            {accessRole === VISITOR && (
              <form
                onSubmit={(e) => {
                  handleLogin(e);
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="用户名"
                  value={username}
                  error={loginError}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="密码"
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
                  登录
                </Button>
              </form>
            )}
            {accessRole === EDITOR && (
              <div>
                <h2>您已经成功登录</h2>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setAccessRole(VISITOR);
                  }}
                >
                  退出登录
                </Button>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
