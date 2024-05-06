import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectsList } from "../../../constants/projectsConst";

export const ProjectsContainer = () => {
  return (
    <div className="bg-warning-subtle p-5">
      <Grid
        container
        className="container text-center"
        justifyContent={"start"}
      >
        {/* only display top 4 cases */}
        {ProjectsList.map((project, index) => (
          <Grid item xs={12} md={6} className="d-flex justify-content-center">
            <Link
              to={`/projects/${index + 1}`}
              className="w-75 p-5 my-4 border bg-white shadow rounded d-flex flex-column
            justify-content-center text-decoration-none text-black"
            >
              <p className="fs-5 fw-bold m-0">{project.title}</p>
              <div className="d-flex flex-column justify-content-center m-3">
                {project.description.map((des) => (
                  <div>{des}</div>
                ))}
              </div>
              <p className="fs-5 fw-bold">{`${project.location}, ${project.date}`}</p>
            </Link>
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Link to={"/projects/"}>
            <Button variant="contained" size="large" className="mt-3">
              查看更多项目
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
