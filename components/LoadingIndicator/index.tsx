
import React, { FunctionComponent } from "react";
import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({ isLoading }) => {

  const { t } = useTranslation();

  return <Backdrop sx={{
    zIndex: 5,
    color: "#fff",
  }} open={isLoading}>
    <Grid container item sx={{ justifyContent: "center", alignContent: "center" }} direction={"column"} >
      <CircularProgress color="inherit" sx={{ alignSelf: "center" }} />
      <Typography sx={{ marginTop: 2 }}>
        {t("Please wait...")}
      </Typography>
    </Grid>

  </Backdrop>;
};

export default LoadingIndicator;