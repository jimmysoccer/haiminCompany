import { Grid } from "@mui/material";
import { computerScreenIcon } from "../../../imgs/image";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
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
              <img
                src={computerScreenIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className="container mx-5 d-flex flex-column justify-content-center"
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
        {/* <Grid container padding={2} justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={4}
            className="container mx-5 d-flex flex-column justify-content-center"
          >
            <h3 className="fs-4 fw-bold ">客户至上</h3>
            <p className="fs-6 fw-bold">
              客户满意是我们追求的最高目标。我们始终关注客户的需求和期望，努力为他们提供高质量的服务和支持。
              我们珍视与客户建立的合作关系，相信通过合作和沟通，可以共同实现双方的成功。
            </p>
            <h3 className="fs-4 fw-bold ">联系我们</h3>
            <p className="fs-6 fw-bold">
              如果您对我们的服务或解决方案感兴趣，或者有任何疑问和需求，请随时与我们联系。
              我们的团队将竭诚为您提供帮助和支持。
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className="d-flex mx-5 justify-content-center"
          >
            <div className="container d-flex">
              <img
                src={intranetIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </Grid>
        </Grid> */}
      </div>
    </div>
  );
};
