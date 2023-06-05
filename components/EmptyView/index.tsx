import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const EmptyView = () => (
  <Grid item container direction={"column"}
    sx={{
      justifyContent: "center",
      position: "absolute",
      top: 100,
      alignItems: "center"
    }}>
    <Typography variant="h6">
      Nuk ka te dhena!
    </Typography>
    <Typography variant="subtitle2">
      (Page not available!)
    </Typography>

    <Button
      size='medium'
      sx={{
        borderRadius: 2,
        color: "white",
        marginTop: 3,
        fontWeight: 400,
        textTransform: "none",
        fontSize: "16px",
        maxHeight: "45px",
        minWidth: "160px",
        fontFamily: "sans-serif"
      }}
      style={{ backgroundColor: "#020f85" }}
    // onClick={onClick}
    >
      {"Scan QR Code"}
    </Button>
  </Grid>);

export default EmptyView;