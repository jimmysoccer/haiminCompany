import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function CustomCarousel({ images, height, style }) {
  if (!images) return <div></div>;

  return (
    <Carousel navButtonsAlwaysVisible height={height}>
      {images.map((item, i) => (
        <Item key={i} imageUrl={item} style={style} />
      ))}
    </Carousel>
  );
}
function Item({ imageUrl, style }) {
  return (
    <Paper className="d-flex justify-content-center shadow-none" style={style}>
      <img
        src={imageUrl}
        style={{ objectFit: "fill" }}
        alt="projects_carousel"
        className="img-fluid h-100"
      ></img>
    </Paper>
  );
}
