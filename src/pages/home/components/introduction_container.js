import { Grid } from "@mui/material";
import { companyIcon, logoIcon, waveIcon } from "../../../imgs/image";

export const IntroductionContainer = () => {
  return (
    <div className="container">
      <div style={{ height: "100px" }}>
        <img src={logoIcon} alt="logo" className="img-fluid w-10 h-100"></img>
      </div>
      <Grid container paddingY={10} spacing={2} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className="container d-flex flex-column justify-content-center"
        >
          <h3>haiming company</h3>
          <h1>Unify teams and accelerate growth</h1>
          <p>
            Keep your team connected and share knowledge in a central, instantly
            searchable hub. Unify all your people, conversations, and documents
            in one easy-to-navigate platform.
          </p>
          <div className="w-100">
            <img src={waveIcon} alt="wave"></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="container">
            <img src={companyIcon} alt="company" className="img-fluid"></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
