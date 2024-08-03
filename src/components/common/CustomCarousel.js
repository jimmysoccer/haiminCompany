import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function CustomCarousel({ images }) {
  if (!images) return <div></div>;

  return (
    <Carousel navButtonsAlwaysVisible>
      {images.map((item, i) => (
        <Item key={i} imageUrl={item} />
      ))}
    </Carousel>
  );
}
function Item({ imageUrl }) {
  return (
    <Paper
      className="d-flex justify-content-center shadow-none"
      // style={{ maxHeight: "270px" }}
    >
      <img
        src={imageUrl}
        alt="projects_carousel"
        className="img-fluid h-100"
      ></img>
    </Paper>
  );
}
