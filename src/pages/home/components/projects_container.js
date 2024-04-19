import { Grid } from "@mui/material";

export const ProjectsContainer = () => {
  return (
    <div className="bg-warning-subtle">
      <Grid
        container
        className="container text-center"
        direction={"column"}
        alignItems={"center"}
      >
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={10}
            md={6}
            className="w-50 p-3 my-5 border bg-white shadow rounded"
          >
            <p className="fs-5 fw-bold m-0">项目1</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">项目具体大概信息</p>
            </div>
            <p className="fs-5 fw-bold">深圳, 5月1日</p>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={10}
            md={6}
            className="w-50 p-3 mb-5 border bg-white shadow rounded"
          >
            <p className="fs-5 fw-bold m-0">项目2</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">项目具体大概信息</p>
            </div>
            <p className="fs-5 fw-bold">上海, 2月1日</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
