import { Button, Grid } from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";
import { ProjectsList } from "../../constants/projectsConst";
import { useAtomValue } from "jotai";
import { accessRoleAtom } from "../../atoms/atom";
import { EDITOR } from "../../constants/constant";

export default function Projects() {
  const accessRole = useAtomValue(accessRoleAtom);
  const editor = accessRole === EDITOR;
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
        {ProjectsList.map((project, index) => (
          <Grid xs={12} item md={4} className="case px-5 my-3">
            <Link to={`/projects/${index + 1}`}>
              <div className="mw-100 mh-200">
                <img
                  src={project.image}
                  alt="product"
                  className="img-fluid"
                ></img>
              </div>
              <h4>{project.title}</h4>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
