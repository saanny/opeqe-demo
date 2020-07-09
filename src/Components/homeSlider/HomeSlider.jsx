import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import homeHeader from "./homeHeader.jpg";
import "./homeSlider.css";

export default function HomeSlider() {
  return (
    <>
      <Grid container justify="center" className="home__promotion">
        <div className="home__background-image">
          <img src={homeHeader} />
        </div>
        <Grid className="container" container direction="row" item justify="space-between" alignItems="center" xs={11}></Grid>
      </Grid>
    </>
  );
}
