import { Link, useLocation } from "react-router-dom";
import { NAV_MENU } from "../../constants/navBar";
import { Grid } from "@mui/material";
import CustomCarousel from "../../components/common/CustomCarousel";

export default function Project() {
  const location = useLocation();
  const project = location.state?.project;
  const descriptions = project?.description?.split("\n");

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
          <p className="me-3 menu-link clicked">{project.title}</p>
        </div>
      </div>
      <div className="w-75 text-center d-inline-block">
        <h1 className="my-5">{project.title}</h1>
        {descriptions?.map((des) => (
          <p className="text-secondary">{des}</p>
        ))}

        {project.images && (
          <CustomCarousel images={project.images}></CustomCarousel>
        )}
        {project.video ? (
          <Grid container justifyContent={"center"}>
            <Grid item className="my-5 d-flex justify-content-center">
              <video controls className="w-100">
                <source src={project.video} type="video/mp4"></source>
              </video>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
      {/* <div className="container d-flex justify-content-center w-75 mt-3 mb-5">
        <div className="w-50 d-flex justify-content-start">
          {id > 1 ? (
            <Link
              to={`/projects/${id - 1}`}
              className="text-decoration-none menu-link"
            >
              {`< 上一个: ${ProjectsList[id - 2].title} >`}
            </Link>
          ) : (
            <div>这就是第一个</div>
          )}
        </div>
        <div className="w-50 d-flex justify-content-end">
          {parseInt(id) === ProjectsList.length ? (
            <div>这就是最后一个</div>
          ) : (
            <Link
              to={`/projects/${+id + 1}`}
              className="text-decoration-none menu-link"
            >
              {`下一个: ${ProjectsList[id]?.title} >`}
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
}
