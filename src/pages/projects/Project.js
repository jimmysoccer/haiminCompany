import { Link, useParams } from "react-router-dom";
import { workingIcon } from "../../imgs/image";
import { NAV_MENU } from "../../constants/navBar";
import { Grid } from "@mui/material";

export default function Project() {
  const { id } = useParams();
  return (
    <div className="container text-center">
      <div className="my-3 w-75 d-inline-block">
        <div className="d-flex">
          <Link to={NAV_MENU[0].path} className="text-decoration-none">
            <p className="me-3 menu-link">首页 </p>
          </Link>
          <p className="me-3">{">"}</p>
          <Link to={NAV_MENU[2].path} className="text-decoration-none">
            <p className="me-3 menu-link">产品中心</p>
          </Link>
          <p className="me-3">{">"}</p>
          <p className="me-3 menu-link clicked">案例 {id}</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src={workingIcon}
          alt="working person"
          className="img-fluid w-75"
        ></img>
      </div>
      <div className="w-75 text-center d-inline-block">
        <h1 className="my-5">案例{id}</h1>
        <p className="mb-5 text-secondary">
          介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作介绍具体工作
        </p>

        <Grid container justifyContent={"center"}>
          <Grid item className="mb-5 d-flex justify-content-center">
            <video controls className="w-100">
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              ></source>
            </video>
          </Grid>
        </Grid>
      </div>
      <div className="container d-flex justify-content-center w-75 mt-3 mb-5">
        <div className="w-50 d-flex justify-content-start">
          {id > 1 ? (
            <Link
              to={`/projects/${id - 1}`}
              className="text-decoration-none menu-link"
            >
              {"< 上一个"}
            </Link>
          ) : (
            <div>这就是第一个</div>
          )}
        </div>
        <div className="w-50 d-flex justify-content-end">
          <Link
            to={`/projects/${+id + 1}`}
            className="text-decoration-none menu-link"
          >
            {"下一个 >"}
          </Link>
        </div>
      </div>
    </div>
  );
}
