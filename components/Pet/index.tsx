import * as React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
// import { useTranslation } from "react-i18next";
// import Footer from "components/Footer";
import MissingAlert from "components/MissingAlert";
import Contacts from "components/Contacts";
import { PetImages, colors, petipieContact } from "common/constants";

const Pet = ({ pet, status }: any) => {
  // const { t } = useTranslation();
  const owner = pet?.ownerInfo;
  const contact = pet?.contactUsIntead ? petipieContact : owner?.contact;
  const avatar = pet?.breed ? PetImages[pet?.breed] : "/ProfilePicStandard.png";
  const color = pet?.styles?.avatarBg
    ? colors.find((color) => color.name === pet?.styles?.avatarBg)
    : { name: "Default", start: "red", end: "yellow" };

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
            {`${pet.name} (${pet?.gender})`}
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
                INFORMACION
              </Typography>
              <div style={{ marginTop: "16px" }}>
                {owner?.name && (
                  <Typography variant="body1">
                    <strong>I perket: </strong> {owner?.name}
                  </Typography>
                )}
                {pet?.city && (
                  <Typography variant="body1">
                    <strong>Qyteti: </strong> {pet?.city}
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
                    <strong>Adresa: </strong> {pet.ownerInfo?.address}
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
        </Grid>
      </Grid>
      {/* Footer*/}
    </Container>
  );
};

export default Pet;
