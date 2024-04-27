import { Grid } from "@mui/material";
import { workingIcon } from "../imgs/image";

export default function Contact() {
  return (
    <div className="container text-center">
      <h2 className="my-5">联系我们</h2>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10}>
          <div>
            <img src={workingIcon} alt="working" className="img-fluid"></img>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="my-5">
          <h3>地址</h3>
          <p>上海市</p>
          <h3>联系电话</h3>
          <p>XXXXXXX</p>
          <h3>邮箱</h3>
          <p>XXXXX</p>
        </Grid>
      </Grid>
    </div>
  );
}
