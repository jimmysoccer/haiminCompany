import { Grid } from "@mui/material";
import "./index.css";
import { computerScreenIcon } from "../../imgs/image";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-5">案例展示</h2>
      <Grid container justifyContent={"start"} spacing={2}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid xs={12} item md={4} className="case m2 px-5">
            <Link to={`/projects/${item}`}>
              <div>
                <img src={computerScreenIcon} alt="product"></img>
              </div>
              <h4>案例{item}</h4>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
