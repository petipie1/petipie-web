import React from "react";

import { Grid, Card, CardContent, Typography } from "@mui/material";
// import DocumentIcon from "@mui/icons-material/Description";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { withTranslation } from "react-i18next";
const Reminder = ({ reminder }: any) => {
  return (
    <Card
      sx={{
        mt: 1.5,
        width: "100%",
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
        borderColor: "transparent",
        backgroundColor: "#DBFFFD",
        borderRadius: 1.5,
      }}
      variant="outlined"
    >
      <CardContent sx={{ m: -1, pl: 3, pr: 3 }}>
        <Grid container alignItems="flex-start">
          <Grid item xs={6}>
            <Typography sx={{ fontSize: "1.1rem", fontFamily: "Product Sans" }}>
              <strong>{reminder.title}</strong>
            </Typography>
            {/* <Typography variant="body1" color="textSecondary">
              {reminder.clinic}
            </Typography> */}
          </Grid>

          <Grid item container xs={6} justifyContent="end" alignContent={"end"}>
            <Typography
              color="textSecondary"
              sx={{
                fontFamily: "Product Sans",
                width: "100%",
                textAlign: "end",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ color: "#23BF8E" }}>Scheduled: </span>{" "}
              {reminder.date}
            </Typography>
            <DeleteForeverOutlinedIcon fontSize="large" htmlColor="#606060" />
          </Grid>
          {/* {reminder.notes && (
            <Grid item container justifyContent={"start"}>
              <Divider
                color="#DEDEDE"
                sx={{ width: "100%", height: 1, opacity: "0.6", mt: 1, mb: 1 }}
              />
              <Typography variant="body1" color="textSecondary">
                {reminder.notes}
              </Typography>
            </Grid>
          )} */}
        </Grid>
      </CardContent>
    </Card>
  );
};

const ReminderList = ({ reminders, t }: any) => (
  <Grid
    item
    container
    sx={{
      justifyContent: "center",
      alignItems: "center",
      mt: 4,
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
        <strong>{t("allReminders")}</strong>
      </Typography>
    </Grid>
    {reminders.map((reminder: any, idx: number) => (
      <Reminder key={reminder.name - idx} reminder={reminder} />
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

export default withTranslation()(ReminderList);
