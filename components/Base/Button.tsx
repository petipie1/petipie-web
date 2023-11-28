import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props: any) => {
  return (
    <MuiButton
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
      onClick={props.onClick}
      style={{
        background: "linear-gradient(to right, #FFDC26, #E0AF00)",
      }}
      {...props}
    >
      {props.title}
    </MuiButton>
  );
};

export default Button;
