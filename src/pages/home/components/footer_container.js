import { Grid } from "@mui/material";
import { ContactInfo } from "../../../constants/contact";
import { ICP } from "../../../constants/constant";

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
          <p>{ContactInfo.address}</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">联系我们</p>
          <p className="m-0">{ContactInfo.email}</p>
          <p className="m-0">{ContactInfo.telephone}</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">关于我们</p>
          <p>海民科技是一家专业的数据库建造和软件开发公司</p>
        </Grid>
      </Grid>
      <div className="w-100 h-1 border mb-5"></div>
      <Grid container justifyContent={"center"} flexDirection={"column"}>
        <div>海民科技 ©</div>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          {ICP}
        </a>
      </Grid>
    </div>
  );
};
