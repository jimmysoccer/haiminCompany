import { Button, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { getProjects } from "../../../services/get-projects";
import { useEffect, useState } from "react";

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetProjects();
  }, []);

  const handleGetProjects = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      setProjects(res?.data?.projects);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-warning-subtle p-5">
      <Grid
        container
        className="container text-center"
        justifyContent={"start"}
      >
        {/* only display top 4 cases */}
        {loading ? (
          <div className="container">
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          projects.map((project) => (
            <Grid item xs={12} md={6} className="d-flex justify-content-center">
              <Link
                to={`/projects/${project?.id}`}
                className="w-75 p-5 my-4 border bg-white shadow rounded d-flex flex-column
            justify-content-center text-decoration-none text-black"
              >
                <p className="fs-5 fw-bold m-0">{project?.title}</p>
                <div className="d-flex flex-column justify-content-center m-3">
                  {project?.description?.split("\n")?.map((des) => (
                    <div>{des}</div>
                  ))}
                </div>
                <p className="fs-5 fw-bold">{`${project?.place}, ${project?.start_date}`}</p>
              </Link>
            </Grid>
          ))
        )}
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
