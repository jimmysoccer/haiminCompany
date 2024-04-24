import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const ProjectsContainer = () => {
  return (
    <div className="bg-warning-subtle">
      <Grid
        container
        className="container text-center"
        justifyContent={"start"}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} md={6} className="d-flex justify-content-center">
            <Link
              to={`/projects/${item}`}
              className="w-75 p-5 my-4 border bg-white shadow rounded d-flex flex-column
            justify-content-center text-decoration-none text-black"
            >
              <p className="fs-5 fw-bold m-0">项目{item}</p>
              <div className="d-flex justify-content-center">
                <p className="p-2">项目具体大概信息</p>
              </div>
              <p className="fs-5 fw-bold">深圳, 5月1日</p>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
