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
            <p className="fs-5 fw-bold m-0">P1</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">
                Our experience has been nothing but positive. Their support team
                is quick to address our tickets and overall their leadership
                team has been very supportive in providing guidance and best
                practices to support our goals.
              </p>
            </div>
            <p className="fs-5 fw-bold">Location, Date</p>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={10}
            md={6}
            className="w-50 p-3 mb-5 border bg-white shadow rounded"
          >
            <p className="fs-5 fw-bold m-0">P1</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">
                Our experience has been nothing but positive. Their support team
                is quick to address our tickets and overall their leadership
                team has been very supportive in providing guidance and best
                practices to support our goals.
              </p>
            </div>
            <p className="fs-5 fw-bold">Location, Date</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
