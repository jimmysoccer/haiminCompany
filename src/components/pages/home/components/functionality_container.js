import { Grid } from "@mui/material";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import aboutAnimation from "../../../../assets/about.json";
import Lottie from "lottie-react";

export const FunctionalityContainer = () => {
  return (
    <div className="bg-primary-subtle">
      <div className="container text-center pb-5">
        <h1 className="fs-2 fw-bold pt-5 pb-5">专业数据库与软件解决方案</h1>
        <Grid container justifyContent={"center"} padding={2}>
          <Grid
            item
            xs={12}
            md={4}
            className="d-flex mx-5 justify-content-center"
          >
            <div className="container d-flex">
              <Lottie
                className="img-fluid"
                animationData={aboutAnimation}
              ></Lottie>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className="container m-5 d-flex flex-column justify-content-center"
          >
            <div className="d-flex justify-content-start">
              <div className="w-25">
                <LooksOneRoundedIcon className="mt-1"></LooksOneRoundedIcon>
              </div>
              <div className="d-flex flex-column justify-content-center mx-4">
                <h3 className="fs-4 fw-bold">数据库设计与建设</h3>
                <p className="fs-6 fw-bold">简单介绍</p>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="w-25">
                <LooksTwoRoundedIcon className="mt-1"></LooksTwoRoundedIcon>
              </div>
              <div className="d-flex flex-column justify-content-center mx-4">
                <h3 className="fs-4 fw-bold">软件开发与定制</h3>
                <p className="fs-6 fw-bold">简单介绍</p>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="w-25">
                <Looks3RoundedIcon className="mt-1"></Looks3RoundedIcon>
              </div>
              <div className="d-flex flex-column justify-content-center mx-4">
                <h3 className="fs-4 fw-bold">数据迁移和优化</h3>
                <p className="fs-6 fw-bold">简单介绍</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
