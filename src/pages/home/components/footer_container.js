import { Grid } from "@mui/material";

export const FooterContainer = () => {
  return (
    <div
      className="text-center py-5 text-white"
      style={{ backgroundColor: "rgb(58,12,87)" }}
    >
      <div className="w-100 h-1 border mt-5"></div>
      <Grid container justifyContent={"center"}>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">地址</p>
          <p>上海市XXXXX</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">联系我们</p>
          <p className="m-0">邮箱@email.com</p>
          <p className="m-0">电话</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">关于我们</p>
          <p>海民科技是一家专业的数据库建造和软件开发公司</p>
        </Grid>
      </Grid>
      <div className="w-100 h-1 border mb-5"></div>
      <Grid container justifyContent={"center"}>
        海民科技 ©
      </Grid>
    </div>
  );
};
