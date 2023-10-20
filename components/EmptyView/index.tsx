import React from "react";
import { Grid, Typography } from "@mui/material";

const EmptyView = ({ alTitle, enTitle }: any) => (
  <>
    <div
      style={{
        background: "linear-gradient(#FCDF7B, #FF724D)",
        position: "fixed",
        zIndex: -1,
        height: "100%",
        width: "100%",
      }}
    />
    <Grid
      item
      container
      direction={"column"}
      sx={{
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ marginTop: 10, fontFamily: "Cocon" }}>
        {alTitle}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontFamily: "Cocon" }}>
        {enTitle}
      </Typography>
      {/* <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      sx={{
        borderRadius: 2,
        color: "red",
        m: 2,
        fontWeight: 500,
        textTransform: "none",
        fontSize: "16px",
        maxHeight: "45px",
        minWidth: "160px",
        fontFamily: "sans-serif"
      }}
    >
      {"Home"}
    </IconButton> */}
    </Grid>
  </>
);

export default EmptyView;
