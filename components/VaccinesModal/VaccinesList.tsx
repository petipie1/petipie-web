import React from "react";

import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
// import DocumentIcon from "@mui/icons-material/Description";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { withTranslation } from "react-i18next";

const Vaccine = ({ vaccine }: any) => {
  function formatDate(dateString: string) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
  }

  const fromattedDAte = formatDate(vaccine.date);

  return (
    <Card
      sx={{
        mt: 1.5,
        width: "100%",
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
        borderColor: "transparent",
        borderRadius: 1.5,
      }}
      variant="outlined"
    >
      <CardContent sx={{ m: -1, pl: 3, pr: 3 }}>
        <Grid container alignItems="flex-start">
          <Grid item xs={8}>
            <Typography sx={{ fontSize: "1.1rem", fontFamily: "Product Sans" }}>
              <strong>{vaccine.title}</strong>
            </Typography>
            <Typography sx={{ fontSize: "1rem" }} color="textSecondary">
              {vaccine.clinic}
            </Typography>
          </Grid>

          <Grid item container xs={4} justifyContent="end" alignContent={"end"}>
            <Typography
              sx={{
                fontFamily: "Product Sans",
                width: "100%",
                textAlign: "end",
                fontSize: "0.9rem",
              }}
              color="textSecondary"
            >
              {fromattedDAte}
            </Typography>
            <DescriptionOutlinedIcon htmlColor="#0080F6" />
          </Grid>
          {vaccine.notes && (
            <Grid item container justifyContent={"start"}>
              <Divider
                color="#DEDEDE"
                sx={{ width: "100%", height: 1, opacity: "0.6", mt: 1, mb: 1 }}
              />
              <Typography sx={{ fontSize: "1rem" }} color="textSecondary">
                {vaccine.notes}
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

const VaccinesList = ({ vaccines, t }: any) => (
  <Grid
    item
    container
    sx={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid
      item
      container
      sx={{
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Product Sans" }}>
        <strong> {t("allVaccines")}</strong>
      </Typography>
    </Grid>
    {vaccines.map((vaccine: any, idx: number) => (
      <Vaccine key={`vac-${vaccine.name}-${idx}`} vaccine={vaccine} />
    ))}

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
);

export default withTranslation()(VaccinesList);
