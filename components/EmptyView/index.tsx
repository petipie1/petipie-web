import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";

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
    <input
      accept="image/*"
      id="icon-button-file"
      type="file"
      capture="environment"
      style={{ display: "none" }}
    />
    <label htmlFor="icon-button-file">
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        sx={{
          borderRadius: 2,
          color: "white",
          m: 2,
          fontWeight: 400,
          textTransform: "none",
          fontSize: "16px",
          maxHeight: "45px",
          minWidth: "160px",
          fontFamily: "sans-serif"
        }}
        style={{ backgroundColor: "#020f85" }}
      >
        {"Scan QR Code"}
      </IconButton>
    </label>
  </Grid>);

export default EmptyView;