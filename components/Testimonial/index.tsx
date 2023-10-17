import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const Testimonial = (props: any) => {
  return (
    <Grid
      sx={{
        maxWidth: "350px",
        maxHeight: "250px",
        display: "flex",
        m: "1rem",
      }}
    >
      {/* Left Column (Image) */}
      <Grid
        item
        container
        style={{
          flex: "0 0 15%",
          padding: "5px",
          alignContent: "start",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={props.icon}
          alt="Large"
          style={{ width: "60px", height: "auto" }}
        />
      </Grid>

      {/* Right Column (Title and Description) */}
      <Grid item style={{ flex: "1" }}>
        <Typography
          sx={{
            fontFamily: "Cocon",
            fontSize: "1.2rem",
            marginBottom: "-3px",
            marginTop: "4px",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Product sans",
            fontSize: "1rem",
            color: "#272727",
            marginBottom: "4px",
            fontStyle: "italic",
          }}
          gutterBottom
        >
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Testimonial;
