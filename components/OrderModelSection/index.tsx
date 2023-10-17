import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

const OrderModelSection = () => (
  <Grid container maxWidth={"lg"} spacing={2} sx={{ marginTop: 5 }}>
    {/* Image */}
    <Grid
      item
      xs={12}
      sm={6}
      container
      alignItems="center"
      sx={{ justifyContent: "center", position: "relative" }}
    >
      <img
        src="/front_back_tag.png"
        alt="Large"
        style={{ maxWidth: "120%", height: "auto" }}
      />
    </Grid>
    {/* Porosit modelin */}
    <Grid
      item
      container
      xs={12}
      sm={6}
      sx={{ alignContent: "center", marginBottom: "5rem" }}
    >
      <Grid item container sx={{ justifyContent: "center" }}>
        <Typography
          sx={{ fontFamily: "Product sans", fontSize: "1rem" }}
          color="yellow"
        >
          Vareset me kodin <strong>QR</strong>
        </Typography>
      </Grid>
      <Grid item container sx={{ justifyContent: "start" }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Cocon",
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          Porosit modelin
        </Typography>
      </Grid>
      <Typography sx={{ fontFamily: "Product sans", fontSize: "1rem" }}>
        Ndihmoni miqte e vegjel te gjejen shtepine e tyre ne rast se humbin.
        Petipie eshte platforma me e re qe iu vjen ne ndihme kafsheve shtepiake
        te cilat humbasin çdo dite.
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
    <Grid item direction={"column"}>
      <Typography
        sx={{
          fontFamily: "Cocon",
          fontSize: "1.1rem",
        }}
        gutterBottom
      >
        Modele Shembuj
      </Typography>
      <Divider
        sx={{
          width: "70%",
          height: "0.18rem",
          borderBottomColor: "transparent",
          backgroundColor: "yellow",
          boxShadow: "5px 8px 6px 3px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Grid>

    <Grid container item sx={{ justifyContent: "space-evenly", m: "1rem" }}>
      {[1, 2, 3, 4, 5, 6, 7].map((x, idx) => (
        <img
          key={x - idx}
          src={`/qr_tag_${x}_1.png`}
          alt="Large"
          style={{ maxWidth: "120px", height: "auto" }}
        />
      ))}
    </Grid>
  </Grid>
);

export default OrderModelSection;
