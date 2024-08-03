import { Button, CircularProgress, Grid } from "@mui/material";
import "../../assets/styles/projects.css";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR } from "../../constants/constant";
import { getProjects } from "../../services/get-projects";
import { useEffect, useState } from "react";
import { logoIcon } from "../../assets/images/image";
import { deleteProject } from "../../services/delete-project";

export default function Projects() {
  const accessRole = useAtomValue(accessRoleAtom);
  const editor = accessRole === EDITOR;

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

  const handleDeleteProject = async (id) => {
    try {
      setLoading(true);
      await deleteProject(id);
    } catch (error) {
    } finally {
      handleGetProjects();
    }
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-5">案例展示</h2>
      {editor && (
        <div className="container">
          <Link to={"/add_project"}>
            <Button variant="contained" size="large">
              添加项目
            </Button>
          </Link>
        </div>
      )}
      <Grid container justifyContent={"start"} spacing={2}>
        {loading ? (
          <div className="container my-5">
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          projects.map((project) => (
            <Grid xs={12} item md={4} className="case px-5 my-3">
              <Link to={`/projects/${project.id}`} state={{ project }}>
                <div className="mw-100 mh-200">
                  <img
                    style={{ maxHeight: "200px", maxWidth: "300px" }}
                    src={
                      project.images.length !== 0 ? project.images[0] : logoIcon
                    }
                    alt="product"
                    className="img-fluid"
                  ></img>
                </div>
                <h4>{project.title}</h4>
              </Link>
              {editor && (
                <Button
                  variant="contained"
                  onClick={() => handleDeleteProject(project?.id)}
                >
                  删除此项目
                </Button>
              )}
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
