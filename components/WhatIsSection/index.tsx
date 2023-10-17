import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WhatIsSection = () => (
  <Grid
    item
    container
    xs={12}
    sm={8}
    sx={{
      alignContent: "center",
      marginTop: "3rem",
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{ fontFamily: "Cocon" }}
      color="yellow"
    >
      Çfarë është
      <span style={{ color: "black" }}> Petipie</span>?
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Product sans",
        fontSize: "1rem",
        fontWeight: 700,
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris integer
      neque fermentum fermentum volutpat a sed cursus. Lorem sed urna sed
      gravida aliquet. Felis lectus id dignissim magna vehicula felis. Sociis
      suscipit et nunc, etiam. Proin sit vitae amet nunc habitasse euismod. Elit
      vitae hendrerit mattis sit urna sit fermentum lorem. Sed magna nunc
      ultrices at in a, est. In metus lectus cursus interdum elementum. A metus
      adipiscing odio proin enim amet semper. Ultrices eget adipiscing quam sed
      nunc, aliquet eget vitae. Id nunc tortor natoque vel eget augue laoreet.
      Id quisque sit gravida facilisis massa, vel non nisl. Nullam cursus massa
      enim mi arcu a blandit. Pellentesque phasellus tempor et felis.
    </Typography>
  </Grid>
);

export default WhatIsSection;
