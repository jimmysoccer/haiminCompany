import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function CustomCarousel({ images, height }) {
  if (!images) return <div></div>;

  return (
    <Carousel navButtonsAlwaysVisible height={height}>
      {images.map((item, i) => (
        <Item key={i} imageUrl={item} height={height} />
      ))}
    </Carousel>
  );
}
function Item({ imageUrl, height }) {
  return (
    <Paper
      className="d-flex justify-content-center shadow-none"
      style={{ height: `${height}px` }}
    >
      <img
        src={imageUrl}
        alt="projects_carousel"
        className="img-fluid h-100"
      ></img>
    </Paper>
  );
}
