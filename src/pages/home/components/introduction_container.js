import { Grid } from "@mui/material";
import { companyIcon, logoIcon, waveIcon } from "../../../imgs/image";
import Lottie from "lottie-react";
import bankAnimation from "../../../assets/bank.json";

export const IntroductionContainer = () => {
  return (
    <div className="container">
      <div style={{ height: "100px" }}>
        <img src={logoIcon} alt="logo" className="img-fluid w-10 h-100"></img>
      </div>
      <Grid container paddingY={10} spacing={2} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          columnSpacing={2}
          className="container d-flex flex-column justify-content-center"
        >
          <h3>上海海民科技有限公司</h3>
          <h1 className="my-3">构建智能、高效的IT基础设施</h1>
          <p className="mt-2">
            作为一家专业的数据库建造和软件开发公司,海民科技致力于为客户提供高效、可靠的IT解决方案。
          </p>
          <p>
            自成立以来,我们已经成功地为众多企业和机构提供了定制化的技术服务，
            帮助他们实现业务目标，提升竞争力。
          </p>
          <div className="w-100">
            <img src={waveIcon} alt="wave"></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="container">
            <img src={companyIcon} alt="company" className="img-fluid"></img>
          </div>
        </Grid>
      </Grid>
      <Lottie
        animationData={bankAnimation}
        className="w-50 d-flex justify-content-center l-50"
      ></Lottie>
    </div>
  );
};
