import "bootstrap/dist/css/bootstrap.min.css";
import { FunctionalityContainer } from "./components/functionality_container";
import { ProjectsContainer } from "./components/projects_container";
import { Grid } from "@mui/material";
import Lottie from "lottie-react";
import databaseAnimation from "../../../assets/database.json";
import { waveIcon } from "../../../assets/images/image";
import { TINT_BLUE } from "../../../constants/colors";

function Home() {
  return (
    <div style={{ backgroundColor: TINT_BLUE }}>
      <div className="container text-white">
        <Grid container paddingY={10} spacing={2} justifyContent={"center"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            columnSpacing={2}
            className="container d-flex flex-column justify-content-center"
          >
            <h3 style={{ fontWeight: "bold" }}>上海海民科技有限公司</h3>
            <h1 className="my-3 fw-bold">构建智能、高效的IT基础设施</h1>
            {/* <p className="mt-2" style={{ fontWeight: "bold" }}>
              作为一家专业的数据库建造和软件开发公司,海民科技致力于为客户提供高效、可靠的IT解决方案。
            </p>
            <p>
              自成立以来,我们已经成功地为众多企业和机构提供了定制化的技术服务，
              帮助他们实现业务目标，提升竞争力。
            </p> */}
            <div className="w-100 h-25">
              <img src={waveIcon} alt="wave"></img>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="container">
              <Lottie
                animationData={databaseAnimation}
                className="w-100 h-100"
              ></Lottie>
            </div>
          </Grid>
        </Grid>
      </div>
      <FunctionalityContainer />
      <ProjectsContainer />
    </div>
  );
}
export default Home;
