import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HowItWorksCard = (props: any) => {
  return (
    <Grid
      direction={"column"}
      sx={{
        backgroundColor: "transparent",
        maxWidth: "300px",
        display: "flex",
      }}
    >
      {/* Left Column (Image) */}
      <Grid
        item
        container
        style={{
          padding: "5px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={props.icon}
          alt="Large"
          style={{ maxWidth: "180px", height: "auto" }}
        />
      </Grid>

      {/* Right Column (Title and Description) */}
      <Grid item sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Cocon",
            fontSize: "1.2rem",
          }}
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Product sans",
            fontSize: "0.85rem",
            color: "#A6A6A6",
            marginBottom: "4px",
          }}
          gutterBottom
        >
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HowItWorksCard;
