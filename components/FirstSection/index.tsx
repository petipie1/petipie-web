import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import HeaderChimp from "../HeaderChimp";
import Link from "next/link";

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
        icon="/icons/ic_corgi.png"
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
        Per miqtë e vegjël
      </Typography>
      <Typography sx={{ fontFamily: "Product sans", fontSize: "1.1rem" }}>
        Ndihmoni miqte e vegjel te gjejen shtepine e tyre ne rast se humbin.
        Petipie eshte platforma me e re qe iu vjen ne ndihme kafsheve shtepiake
        te cilat humbasin çdo dite.
      </Typography>
      <Link href={"#order-form"}>
        <Button
          sx={{
            borderRadius: "3rem",
            textTransform: "none",
            fontFamily: "Product Sans",
            color: "white",
            maxHeight: "50px",
            fontSize: "1.2rem",
            paddingRight: "1.5rem",
            paddingLeft: "1.5rem",
            mt: "1.5rem",
          }}
          style={{
            background: "linear-gradient(to right, #FFDC26, #E0AF00)",
          }}
        >
          Porosit varësen tënde!
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default FirstSection;
