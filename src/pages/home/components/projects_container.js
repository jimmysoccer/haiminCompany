import { Grid, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
  companyIcon,
  computerScreenIcon,
  intranetIcon,
  logoIcon,
} from "../../../imgs/image";

export const ProjectsContainer = () => {
  function Example(props) {
    var items = [
      {
        image: companyIcon,
      },
      {
        image: computerScreenIcon,
      },
      { image: intranetIcon },
    ];

    return (
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    const imageUrl = props?.item?.image ?? logoIcon;
    return (
      <Paper
        className="bg-warning-subtle d-flex justify-content-center shadow-none"
        style={{ height: "400px" }}
      >
        <img src={imageUrl} alt="projects_carousel" className="img-fluid"></img>
      </Paper>
    );
  }

  return (
    <div className="bg-warning-subtle">
      <Grid
        container
        className="container text-center"
        direction={"column"}
        alignItems={"center"}
      >
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={10}
            md={6}
            className="w-50 p-3 my-5 border bg-white shadow rounded"
          >
            <p className="fs-5 fw-bold m-0">项目1</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">项目具体大概信息</p>
            </div>
            <p className="fs-5 fw-bold">深圳, 5月1日</p>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={10}
            md={6}
            className="w-50 p-3 mb-5 border bg-white shadow rounded"
          >
            <p className="fs-5 fw-bold m-0">项目2</p>
            <div className="d-flex justify-content-center">
              <p className="p-2">项目具体大概信息</p>
            </div>
            <p className="fs-5 fw-bold">上海, 2月1日</p>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10} md={6} className="w-50 mb-5">
            <Example />
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            xs={12}
            md={6}
            item
            className="mb-5 d-flex justify-content-center"
          >
            <video controls className="w-100">
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              ></source>
            </video>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
