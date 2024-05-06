import { Grid } from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";
import { ProjectsList } from "../../constants/projectsConst";

export default function Projects() {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-5">案例展示</h2>
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
