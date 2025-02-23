import { Grid } from "@mui/material";
import aboutAnimation from "../../../../assets/about.json";
import Lottie from "lottie-react";
import {
  pointer1Icon,
  pointer2Icon,
  pointer3Icon,
} from "../../../../assets/images/image";

export const FunctionalityContainer = () => {
  return (
    <div style={{ backgroundColor: "#F4F6FC", padding: "80px 0" }}>
      <div className="container text-center pb-5">
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1 className="fs-2 fw-bold pt-5 pb-5">我们的核心业务领域</h1>
            <Lottie
              className="img-fluid"
              animationData={aboutAnimation}
              style={{ width: "500px" }}
            ></Lottie>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="container d-flex flex-wrap justify-content-start"
          >
            <div className="d-flex flex-column align-items-start text-start w-50 mt-5 p-2">
              <img src={pointer1Icon} alt="pointer 1"></img>
              <h3 className="fw-bold my-2">数据库设计</h3>
              <h5 className="text-secondary fw-bold">
                构建高效可靠数据库，确保数据完整性与高性能
              </h5>
            </div>
            <div className="d-flex flex-column align-items-start text-start w-50 mt-5 p-2">
              <img src={pointer2Icon} alt="pointer 1"></img>
              <h3 className="fw-bold my-2">软件开发</h3>
              <h5 className="text-secondary fw-bold">
                定制化软件解决方案，从需求分析到部署全覆盖
              </h5>
            </div>
            <div className="d-flex flex-column align-items-start text-start w-50 mt-5 p-2">
              <img src={pointer3Icon} alt="pointer 1"></img>
              <h3 className="fw-bold my-2">数据迁移</h3>
              <h5 className="text-secondary fw-bold">
                安全高效迁移数据，优化性能提升系统响应
              </h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
