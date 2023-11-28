import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Testimonial from "components/Testimonial";

const WhyNeedItSection = () => (
  <Grid
    container
    item
    sx={{
      justifyContent: "start",
      padding: "0.2rem 2rem",
    }}
  >
    <Grid item container sx={{ justifyContent: "start", mt: "1rem" }}>
      <Typography
        sx={{ fontFamily: "Product sans", fontSize: "1rem" }}
        color="yellow"
      >
        Deshmite e klienteve
      </Typography>
    </Grid>
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Cocon",
        fontSize: "1.5rem",
        fontWeight: 500,
      }}
    >
      Pse ju duhet Petipie?
    </Typography>
    <Grid
      container
      item
      sx={{
        justifyContent: "start",
        mt: "1rem",
        mb: "1rem",
      }}
    >
      <Testimonial
        icon="/icons/ic_testimonial_1.png"
        title={"Alesia"}
        description={
          "“Me kishte humbur macja ime e shtrenjte dhe vetem fale varses me kodin QR qe i kisha vendosur, zoteria me telefonoi pasi kishte gjetur numrin e tel aty... “"
        }
      />
      <Testimonial
        icon="/icons/ic_testimonial_2.png"
        title={"Sara"}
        description={"“E gjeta Rokon fale jush, ju falenderoj nga zemraaa ❤️“"}
      />
      <Testimonial
        icon="/icons/ic_testimonial_3.png"
        title={"Indrit"}
        description={"“Jeni super fantastik!“"}
      />
    </Grid>
  </Grid>
);

export default WhyNeedItSection;
