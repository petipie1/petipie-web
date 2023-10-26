import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const WhatIsSection = () => (
  <Grid
    id="what-is"
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
      Petipie është një platformë inovative dhe e thjeshtë që synon të ndihmojë
      në gjetjen sa më efikase dhe të shpejtë të kafshëve të humbura shtëpiake,
      përmes një varese që mund të vendoset te qeni ose macja juaj. Kjo varëse
      ka një QR kod të personalizuar i cili në rast se skanohet, shfaq
      informacionin e detajuar të kafshës dhe të pronarit, duke përfshirë numrin
      e kontaktit, emrin, adresën dhe të tjera informacione të rëndësishme
      (bazuar në konfigurimet dhe preferencat individuale). Në rast se kafsha
      juaj humbet dhe është pajisur me varësen e Petipie, kur dikush e gjen atë,
      do të skanojë kodin dhe do të kontaktojë menjëherë me ju përmes numrit të
      kontaktit ose përmes rrjeteve sociale (nëse i keni konfiguruar).
    </Typography>
  </Grid>
);

export default WhatIsSection;
