import { Button, Grid } from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR } from "../../constants/constant";
import { getProjects } from "../../services/get-projects";
import { useEffect, useState } from "react";
import { logoIcon } from "../../imgs/image";
import { deleteProject } from "../../services/delete-project";

export default function Projects() {
  const accessRole = useAtomValue(accessRoleAtom);
  const editor = accessRole === EDITOR;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    handleGetProjects();
  }, []);

  const handleGetProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res?.data?.projects);
    } catch (error) {}
  };

  const handleDeleteProject = async (id) => {
    try {
      const res = await deleteProject(id);
    } catch (error) {
    } finally {
      handleGetProjects();
    }
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-5">案例展示</h2>
      {editor && (
        <Link to={"/add_project"}>
          <Button variant="contained" size="large">
            添加项目
          </Button>
        </Link>
      )}
      <Grid container justifyContent={"start"} spacing={2}>
        {projects.map((project) => (
          <Grid xs={12} item md={4} className="case px-5 my-3">
            <Link to={`/projects/${project.id}`} state={{ project }}>
              <div className="mw-100 mh-200">
                <img
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
        ))}
      </Grid>
    </div>
  );
}
