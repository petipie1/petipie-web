import React from "react";
import { Alert, styled } from "@mui/material";

const StyledAlert = styled(Alert)({
  "& .MuiAlert-icon": {
    color: "white", // Hide the icons
  },
});

const MissingAlert = ({ title, message }: any) => (
  <>
    <StyledAlert
      severity="error"
      sx={{
        backgroundColor: "#FF6060",
        color: "white",
        width: "90%",
        margin: "16px auto",
      }}
      icon={null}
    >
      {title}
    </StyledAlert>
    <Alert
      severity="warning"
      sx={{
        width: "90%",
        margin: "16px auto",
      }}
      icon={null}
    >
      {message}
    </Alert>
  </>
);

export default MissingAlert;
