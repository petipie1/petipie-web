import React, { FunctionComponent } from "react";
import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface LoadingIndicatorProps {
  isLoading: boolean;
  title?: string;
}

const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({
  isLoading,
  title,
}) => {
  const { t } = useTranslation();
  var message = title ?? "Please wait...";

  return (
    <Backdrop
      sx={{
        zIndex: 5,
        color: "#fff",
      }}
      open={isLoading}
    >
      <Grid
        container
        item
        sx={{ justifyContent: "center", alignContent: "center" }}
        direction={"column"}
      >
        <CircularProgress color="inherit" sx={{ alignSelf: "center" }} />
        <Typography sx={{ marginTop: 2 }}>{t(message)}</Typography>
      </Grid>
    </Backdrop>
  );
};

export default LoadingIndicator;
