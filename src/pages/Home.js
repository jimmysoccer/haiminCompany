import { Rating, Typography } from "@mui/material";
import { useState } from "react";
import "./index.css";

function Home() {
  const [rate, setRate] = useState(0);
  return (
    <>
      <div className="index">
        <text>海运公司Template</text>
      </div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
      />
    </>
  );
}
export default Home;
