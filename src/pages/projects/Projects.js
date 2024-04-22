import { Grid } from "@mui/material";
import "./index.css";
import { computerScreenIcon } from "../../imgs/image";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container text-center w-75 my-5">
      <h2 className="mb-5">案例展示</h2>
      <Grid container justifyContent={"center"}>
        <Grid item md={3} className="case mx-3 my-2">
          <Link to={"/projects/1"}>
            <div>
              <img src={computerScreenIcon} alt="product"></img>
            </div>
            <h4>案例1</h4>
          </Link>
        </Grid>
        <Grid item md={3} className="case mx-3 my-2">
          <Link to={"/projects/2"}>
            <div>
              <img src={computerScreenIcon} alt="product"></img>
            </div>
            <h4>案例2</h4>
          </Link>
        </Grid>
        <Grid item md={3} className="case mx-3 my-2">
          <Link to={"/projects/3"}>
            <div>
              <img src={computerScreenIcon} alt="product"></img>
            </div>
            <h4>案例3</h4>
          </Link>
        </Grid>
        <Grid item md={3} className="case mx-3 my-2">
          <Link to={"/projects/4"}>
            <div>
              <img src={computerScreenIcon} alt="product"></img>
            </div>
            <h4>案例4</h4>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
