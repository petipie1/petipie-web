import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const EmptyView = () => (
  <>
    <Grid
      item
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" sx={{ fontSize: 16, width: "90%", mb: 3 }}>
        Ju nuk keni asnjë vaksinë të ruajtur. <strong>Vetëm</strong> klinikat
        veterinare mund të shtojnë një vaksinë.
      </Typography>
      <Image alt="empty" src={"/ic_empty.png"} />

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
