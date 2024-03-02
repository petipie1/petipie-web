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
      <Typography variant="caption" sx={{ fontSize: 16, width: "90%" }}>
        You don’t have any vaccine record added so far. <strong>Only</strong> a
        vet clinic can add a vaccine record.
      </Typography>
      <Image alt="empty" src={"/ic_empty.png"} width={"100%"} height={"100%"} />

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
