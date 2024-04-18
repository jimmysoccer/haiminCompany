import { Grid } from "@mui/material";

export const FooterContainer = () => {
  return (
    <div
      className="text-center py-5 text-white"
      style={{ backgroundColor: "rgb(58,12,87)" }}
    >
      <div className="w-100 h-1 border"></div>
      <Grid container justifyContent={"center"}>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">Headquarters</p>
          <p>CHN shanghai jiading</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">Contact</p>
          <p className="m-0">example@email.com</p>
          <p className="m-0">telephone</p>
        </Grid>
        <Grid item md={3} margin={2}>
          <p className="fs-5 fw-bold">About</p>
          <p>
            Axero is a technology company that builds digital workplace and
            intranet software for employee-centric organizations around the
            world.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
