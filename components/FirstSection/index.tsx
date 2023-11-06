import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import HeaderChimp from "../HeaderChimp";

const FirstSection = () => (
  <Grid container maxWidth={"lg"} spacing={2} sx={{ marginTop: 5, padding: 2 }}>
    <Grid
      item
      xs={12}
      sm={6}
      container
      alignItems="center"
      sx={{ justifyContent: "center", position: "relative" }}
    >
      <img
        src="/pets_img.png"
        alt="Large"
        style={{ maxWidth: "350px", height: "auto" }}
      />
      <HeaderChimp
        sx={{
          position: "absolute",
          top: "45%",
          right: 10,
          zIndex: 1,
        }}
        icon="/icons/ic_corgi.png"
        title={"Më kthe në shtëpi"}
        description={
          "Ndihmo qenin/macen qe ka humbur duke skanuar kodin QR ne varese."
        }
      />
      <HeaderChimp
        sx={{
          position: "absolute",
          bottom: "15%",
          left: 20,
          zIndex: 1,
        }}
        icon="/qr_tag_1_1.png"
        title={"Shiko modelet"}
        description={
          "Ne ju ofrojme shumellojshmeri modelesh per varesen e qenushit apo maces tuaj"
        }
      />
    </Grid>
    <Grid
      item
      container
      xs={12}
      sm={6}
      sx={{ alignContent: "center", marginBottom: "5rem" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "Cocon" }}
        color="yellow"
      >
        Për miqtë e vegjël
      </Typography>
      <Typography sx={{ fontFamily: "Product sans", fontSize: "1.1rem" }}>
        Ndihmoni miqtë e vegjël të gjejnë shtëpine e tyre në rast se humbin.
        Petipie është platforma më e re që ju vjen në ndihmë kafshëve shtëpiake
        të cilat humbasin çdo ditë.
      </Typography>
      <Button
        sx={{
          borderRadius: "3rem",
          textTransform: "none",
          fontFamily: "Product Sans",
          color: "white",
          maxHeight: "50px",
          minWidth: "60%",
          fontSize: "1.2rem",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          mt: "1.5rem",
        }}
        onClick={() => document.querySelector("#order-form")?.scrollIntoView()}
        style={{
          background: "linear-gradient(to right, #FFDC26, #E0AF00)",
        }}
      >
        Porosit varësen tënde!
      </Button>
    </Grid>
  </Grid>
);

export default FirstSection;
