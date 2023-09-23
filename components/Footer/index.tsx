import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      // Set the background color
      color="white" // Set the text color
      textAlign="center"
      py={1}
      marginTop={5}
    >
      <Typography variant="body1" color={"whitesmoke"}>
        Na kontaktoni:
      </Typography>
      <Typography variant="body2" color={"whitesmoke"}>
        Email: petipie1@gmail.com
      </Typography>
      <Typography variant="body2" color={"whitesmoke"}>
        Tel: +355686284516
      </Typography>
    </Box>
  );
};

export default Footer;
