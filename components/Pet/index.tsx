import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
// import Footer from "components/Footer";
import MissingAlert from "components/MissingAlert";
import Contacts from "components/Contacts";
import { PetImages, colors, petipieContact } from "common/constants";
import InfoDialog from "components/InfoDialog";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import notyificationService from "./../../services/noitifcation.service";

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Pet = ({ pet, status }: any) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alert, setAlert] = useState<{ open: boolean; severity: any }>({
    open: false,
    severity: "error",
  });

  const { t } = useTranslation();
  const owner = pet?.ownerInfo;
  const contact = pet?.contactUsIntead ? petipieContact : owner?.contact;
  const avatar =
    pet?.image ?? PetImages[pet?.breed] ?? "/ProfilePicStandard.png";
  const color = pet?.styles?.avatarBg
    ? colors.find((color) => color.name === pet?.styles?.avatarBg)
    : { name: "Default", start: "red", end: "yellow" };

  async function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setAlert({ open: true, severity: "success" });
    // const googleMapsLocation = `https://maps.google.com/?q=${latitude},${longitude}`;
    const googleMapsLocation = `http://www.google.com/maps/place/${latitude},${longitude}`;
    console.log(googleMapsLocation);

    // Make API call to OpenWeatherMap
    // await notifyOwner();
    const email = owner?.contact?.email || petipieContact?.email;
    if (email)
      await notyificationService.sendEmailNotification({
        locationLink: googleMapsLocation,
        email,
      });
  }

  function error() {
    setAlert({ open: true, severity: "error" });
  }

  const handleSubmit = () => {
    if (navigator?.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, error, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, error, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            setAlert({ open: true, severity: "error" });
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    setIsDialogOpen(false);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false, severity: "success" });
  };

  return (
    <Container maxWidth="sm">
      {/* Alerts */}
      {status === "Missing" && (
        <MissingAlert title="Kam humbur 🥺" message={pet?.missingMessage} />
      )}
      {/* Avatar */}
      <Grid container justifyContent="center">
        <Grid item sx={{ marginTop: 5 }}>
          <Avatar
            alt="Profile Avatar"
            src={avatar}
            sx={{
              width: 180,
              height: 180,
              border: "3px solid whitesmoke",
              background: `linear-gradient(${color?.start}, ${color?.end})`,
              padding: 3,
            }}
          />
        </Grid>
      </Grid>
      {/* Name and Breed */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{ marginTop: 1 }}
      >
        <Grid item>
          <Typography
            variant="h5"
            align="center"
            color={"white"}
            sx={{ fontWeight: 500 }}
          >
            {`${pet.name} (${t(pet?.gender)})`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" color={"whitesmoke"}>
            {`(${pet.breed})`}
          </Typography>
        </Grid>
      </Grid>
      {/* Contact Buttons */}
      <Contacts {...contact} />
      {/* Info card */}
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 5, marginBottom: 5 }}
      >
        <Grid item width="80%">
          <Card
            variant="outlined"
            style={{ margin: "0 auto", borderRadius: 10 }}
          >
            <CardContent>
              <Typography
                sx={{
                  borderBottom: "1px solid #ccc",
                  textAlign: "center",
                  paddingBottom: 0.5,
                  fontWeight: 700,
                }}
              >
                {t("information")}
              </Typography>
              <div style={{ marginTop: "16px" }}>
                {owner?.name && (
                  <Typography variant="body1">
                    <strong>{t("belongsTo")}: </strong> {owner?.name}
                  </Typography>
                )}
                {pet?.city && (
                  <Typography variant="body1">
                    <strong>{t("city")}: </strong> {pet?.city}
                  </Typography>
                )}
                {pet.ownerInfo?.address && (
                  <Typography
                    variant="body1"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 5,
                    }}
                  >
                    <strong>{t("address")}: </strong> {pet.ownerInfo?.address}
                  </Typography>
                )}
                {pet.info && (
                  <Typography
                    variant="body1"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 5,
                    }}
                  >
                    <strong>Info: </strong> {pet.info}
                  </Typography>
                )}
              </div>
            </CardContent>
          </Card>
          {owner?.contact?.email && (
            <Button
              fullWidth
              sx={{
                mt: 3,
                borderRadius: "3rem",
                // border: "2px solid black",
                textTransform: "none",
                fontFamily: "Product Sans",
                color: "whitesmoke",
                maxHeight: "50px",
                fontSize: "1.1rem",
                paddingRight: "1.5rem",
                paddingLeft: "1.5rem",
              }}
              onClick={() => setIsDialogOpen(true)}
              style={{
                // background: "linear-gradient(to right, #FFDC26, #E0AF00)",
                backgroundColor: "black",
              }}
            >
              {t("sendLocationButton")}
            </Button>
          )}
        </Grid>
      </Grid>
      <InfoDialog
        title={t("sendLocationTitle")}
        message={<span>{t("sendLocationMessage")}</span>}
        isOpen={isDialogOpen}
        handleConfirm={handleSubmit}
        handleCancel={() => setIsDialogOpen(false)}
      />
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{
            width: "100%",
            fontFamily: "Product Sans",
            fontSize: "1rem",
          }}
        >
          {alert.severity === "success"
            ? t("locationSentMessage")
            : t("locationNotSentMessage")}
        </Alert>
      </Snackbar>
      {/* Footer*/}
    </Container>
  );
};

export default Pet;
