import { Grid } from "@mui/material";
import { computerScreenIcon, intranetIcon } from "../../../imgs/image";

export const FunctionalityContainer = () => {
  return (
    <div className="bg-primary-subtle">
      <div className="container text-center pb-5">
        <h1 className="fs-2 fw-bold pt-5 pb-5">专业数据库与软件解决方案</h1>
        <Grid container justifyContent={"center"} padding={2}>
          <Grid item xs={12} md={4} className="d-flex justify-content-center">
            <div className="container">
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
            className="container m-0 d-flex flex-column justify-content-center"
          >
            <h3 className="fs-4 fw-bold ">List 1</h3>
            <p className="fs-6 fw-bold">
              list 1 balabalabalabalabalabalabalabala
            </p>
            <h3 className="fs-4 fw-bold ">List 1</h3>
            <p>list 1 balabalabalabalabalabalabalabala</p>
            <h3 className="fs-4 fw-bold ">List 1</h3>
            <p>list 1 balabalabalabalabalabalabalabala</p>
          </Grid>
        </Grid>
        <Grid container padding={2} justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={4}
            className="container m-0 d-flex flex-column justify-content-center"
          >
            <h3 className="fs-4 fw-bold ">List 2</h3>
            <p className="fs-6 fw-bold">
              list 1 balabalabalabalabalabalabalabala
            </p>
            <h3 className="fs-4 fw-bold ">List 1</h3>
            <p>list 1 balabalabalabalabalabalabalabala</p>
            <h3 className="fs-4 fw-bold ">List 1</h3>
            <p>list 1 balabalabalabalabalabalabalabala</p>
          </Grid>
          <Grid item xs={12} md={4} className="d-flex justify-content-center">
            <div className="container">
              <img
                src={intranetIcon}
                alt="computer screen"
                className="img-fluid"
              ></img>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
