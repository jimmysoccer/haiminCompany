import { Button, Grid, TextField } from "@mui/material";
import { workingIcon } from "../../assets/images/image";
import { useState } from "react";
import { ContactInfo } from "../../constants/contact";

export default function Contact() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    if (title === "") setTitleError(true);
    else setTitleError(false);
    if (comment === "") setCommentError(true);
    else setCommentError(false);
    if (email === "") setEmailError(true);
    else setEmailError(false);
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
          <p>{ContactInfo.telephone}</p>
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
            rows={4}
          ></TextField>
          <TextField
            className="w-100 p-2"
            required
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
