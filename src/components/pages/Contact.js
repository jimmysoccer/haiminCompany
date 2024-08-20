import { Button, Grid, TextField } from "@mui/material";
import { workingIcon } from "../../assets/images/image";
import { useState } from "react";
import { ContactInfo } from "../../constants/contact";
import toast from "react-hot-toast";
import { sendMessages } from "../../services/messages-api";

export default function Contact() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async () => {
    if (title === "") {
      setTitleError(true);
      return;
    } else setTitleError(false);
    if (comment === "") {
      setCommentError(true);
      return;
    } else setCommentError(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      setEmailError(true);
      return;
    } else setEmailError(false);
    if (titleError || commentError || emailError) return;

    const payload = {
      title,
      content: comment,
      email,
    };
    try {
      const res = await sendMessages(payload);
      if (res.status === 200) {
        toast.success("留言发送成功，我们收到消息后会尽快回复您!");
        setTitle("");
        setComment("");
        setEmail("");
      } else {
        toast.error("留言发送失败，请稍后重试！");
      }
    } catch (error) {}
  };

  return (
    <div className="container text-center">
      <h2 className="my-5">联系我们</h2>
      <Grid container justifyContent={"start"}>
        <Grid item xs={12} md={12}>
          <div>
            <img src={workingIcon} alt="working" className="img-fluid"></img>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="my-5 d-flex flex-column justify-content-center"
        >
          <h3>地址</h3>
          <p>{ContactInfo.address}</p>
          <h3>联系电话</h3>
          <p>座机电话：{ContactInfo.telephone}</p>
          <p>移动电话：{ContactInfo.cellphone}</p>
          <h3>邮箱</h3>
          <p>{ContactInfo.email}</p>
        </Grid>
        <Grid item xs={12} md={6} className="my-5">
          <TextField
            className="w-100 p-2"
            required
            label="留言标题"
            error={titleError}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
          <TextField
            className="w-100 p-2"
            required
            label="留言内容"
            error={commentError}
            onChange={(e) => setComment(e.target.value)}
            multiline
            minRows={4}
          ></TextField>
          <TextField
            className="w-100 p-2"
            required
            type="email"
            label="联系邮箱"
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <Button variant="outlined" onClick={handleSubmit}>
            提交
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
