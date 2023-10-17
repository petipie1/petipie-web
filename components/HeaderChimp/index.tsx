import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HeaderChimp = (props: any) => {
  //   return (
  // <Grid
  //   container
  //   direction={"row"}
  //   sm={3}
  //   sx={{ marginTop: 2, maxWidth: "200px" }}
  // >
  //   {/* Left Column (Image) */}
  //   <Grid
  //     item
  //     // xs={12}
  //     // sm={6}
  //     container
  //     sx={{ justifyContent: "center" }}
  //   >
  //     <img
  //       src="/ic_corgi.png"
  //       alt="Large"
  //       style={{ maxWidth: "20px", height: "auto" }}
  //     />
  //   </Grid>

  //   {/* Right Column (Text and Description) */}
  //   <Grid item sm={2} sx={{ padding: "1px" }}>
  //     <Typography variant="body1" gutterBottom sx={{ fontFamily: "Cocon" }}>
  //       Më kthe në shtëpi
  //     </Typography>
  //     <Typography variant="body1" sx={{ fontFamily: "Product sans" }}>
  //       Ndihmo qenin/macen qe ka humbur duke skanuar kodin QR ne varese.
  //     </Typography>
  //   </Grid>
  // </Grid>
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        borderRadius: "0.75rem",
        maxWidth: "250px",
        maxHeight: "60px",
        display: "flex",
        boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.1)",

        ...props.sx,
      }}
    >
      {/* Left Column (Image) */}
      <Grid
        item
        container
        style={{
          flex: "0 0 15%",
          padding: "5px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={props.icon}
          alt="Large"
          style={{ maxWidth: "30px", height: "auto" }}
        />
      </Grid>

      {/* Right Column (Title and Description) */}
      <Grid item style={{ flex: "1" }}>
        <Typography
          sx={{
            fontFamily: "Cocon",
            fontSize: "1rem",
            marginBottom: "-3px",
            marginTop: "4px",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Product sans",
            fontSize: "0.65rem",
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

export default HeaderChimp;
