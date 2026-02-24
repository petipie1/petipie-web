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
    <Typography sx={{ fontFamily: "Product sans", fontSize: "1.1rem" }}>
      Petipie është një platformë inovative dhe e thjeshtë që synon të ndihmojë
      në gjetjen sa më efikase dhe të shpejtë të kafshëve të humbura shtëpiake,
      si dhe në menaxhimin dixhital të shëndetit të tyre. Përmes një varëseje që
      vendoset te qeni ose macja juaj, e pajisur me një QR kod të personalizuar,
      çdokush që skanon kodin mund të shikojë informacionin e detajuar të
      kafshës dhe të pronarit, duke përfshirë numrin e kontaktit, emrin, adresën
      dhe informacione të tjera të rëndësishme, bazuar në preferencat tuaja.
      <br /> <br />
      Përveç identifikimit, Petipie shërben edhe si një kartelë dixhitale
      shëndetësore për kafshën tuaj shtepiake.
      <br /> <br />
      Nëpërmjet të njëjtit QR kod, ju mund të ruani të dhënat e vaksinave (mund
      te shtohen vetem nga klinika veterinare), historikun mjekësor dhe të
      vendosni reminder për vaksinat e ardhshme, duke e mbajtur gjithë
      historikun shëndetësor të kafshës shtepiake në mënyrë dixhitale, të sigurt
      dhe gjithmonë të aksesueshme.
      <br /> <br />
      Në rast se kafsha juaj humbet dhe është pajisur me varësen e Petipie,
      kushdo që e gjen atë do të skanojë kodin dhe do t'ju kontaktojë menjëherë
      përmes numrit të telefonit ose rrjeteve sociale.
    </Typography>
  </Grid>
);

export default WhatIsSection;
