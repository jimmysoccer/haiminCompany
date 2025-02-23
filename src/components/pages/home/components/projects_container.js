import { Button, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { getProjects } from "../../../../services/get-projects";
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
    <div className="bg-white p-5">
      <Grid
        container
        className="container text-center"
        justifyContent={"start"}
      >
        <h1 className="w-100">最近项目</h1>
        {/* only display top 4 cases */}
        {loading ? (
          <div className="container">
            <CircularProgress></CircularProgress>
          </div>
        ) : projects.length === 0 ? (
          <div></div>
        ) : (
          projects.length > 0 &&
          projects
            .reverse()
            .slice(0, 2)
            .map((project) => (
              <Grid
                item
                xs={12}
                md={12}
                className="d-flex justify-content-center"
                minHeight={500}
              >
                <div
                  to={`/projects/${project?.id}`}
                  state={{ project }}
                  className="w-75 my-4 d-flex flex-column
            justify-content-center text-decoration-none text-black position-relative"
                >
                  <div className="w-100 h-100 z-0 position-absolute overflow-hidden">
                    <img
                      className="img-fluid"
                      src={project?.images[0]}
                      alt="project-cover"
                    ></img>
                  </div>
                  <div
                    className="z-1 w-100 text-white h-100 d-flex flex-column justify-content-end"
                    style={{
                      background:
                        "linear-gradient(233.64deg, rgba(28, 30, 83, 1) 0%, rgba(28, 30, 83, 0.42) 100%)",
                    }}
                  >
                    <p className="fs-5 fw-bold m-0">{project?.title}</p>
                    <div
                      className="text-start m-3"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </div>
                    <p className="fs-5 fw-bold">{`${project?.place}, ${project?.start_date}`}</p>
                    <Link
                      to={`/projects/${project?.id}`}
                      state={{ project }}
                      style={{ color: "#FCD980" }}
                      className="text-decoration-none"
                    >
                      了解更多
                    </Link>

                    <div className="mb-5 fw-bold"></div>
                  </div>
                </div>
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
