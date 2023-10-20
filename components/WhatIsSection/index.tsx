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
      Petipie eshte nje platforme e thjeshte inovative qe ka per qellim te
      ndihmoje ne gjetjen sa me shpejte te kafsheve te humbura shtepiake me ane
      te nje varese te thejshte qe mund ti vendoset qenit ose maces tuaj.
      Varesja ka te stampuar nje QR kod i cili po te skanohet, shfaq
      informacionet e qenit/maces dhe informacionet mbi te zotin/zonjen si
      nr.kontakti, emer, adrese etj (varet nga konfigurimet). Ne rast se
      qeni/macja juaj humb dhe ka te vendosur varesen e Petipie, sapo dikush te
      gjeje, do ta skanoje dhe do t’ju kontaktoje menjehere tek numri apo
      profilet sociale (nese i keni konfiguruar).
    </Typography>
  </Grid>
);

export default WhatIsSection;
