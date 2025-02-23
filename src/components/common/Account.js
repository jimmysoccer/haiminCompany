import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { getLoginAuth } from "../../services/get-login-auth";
import { useAtom } from "jotai";
import { accessRoleAtom, messagesAtom } from "../../atoms/atom";
import { EDITOR, VISITOR } from "../../constants/constant";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getMessages } from "../../services/messages-api";
import dayjs from "dayjs";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessRole, setAccessRole] = useAtom(accessRoleAtom);
  const [loginError, setLoginError] = useState(false);
  const [messages, setMessages] = useAtom(messagesAtom);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await getLoginAuth(username, password);
      if (res.status === 200) {
        setAccessRole(EDITOR);
        navigate("/home");
        toast.success("您已成功登录!");
        handleGetMessages();
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

  const handleLogout = () => {
    setAccessRole(VISITOR);
    toast.error("您已退出登录!");
  };
  const handleGetMessages = async () => {
    try {
      const res = await getMessages();
      if (res.status === 200) {
        setMessages(res.data?.messages);
      }
    } catch (error) {}
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
                    handleLogout();
                  }}
                >
                  退出登录
                </Button>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
      {accessRole === EDITOR && (
        <Grid container className="my-5 text-center" direction={"column"}>
          <h1>留言列表</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">标题</th>
                <th scope="col">内容</th>
                <th scope="col">邮箱地址</th>
                <th scope="col">留言日期</th>
              </tr>
            </thead>
            <tbody>
              {messages.reverse().map((message, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{message?.title}</td>
                  <td style={{ maxWidth: "200px" }}>{message?.content}</td>
                  <td>{message?.email}</td>
                  <td>
                    {dayjs(message?.sent_date).format("YYYY-MM-DD HH:mm:ss")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      )}
    </div>
  );
};

export default Account;
