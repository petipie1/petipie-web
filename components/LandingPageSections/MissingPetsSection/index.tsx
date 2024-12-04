import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import MissingPetCard from "./MisssingPet";

const MissingPetsSection = ({ missingPets }: any) => {
  if (!missingPets) return null;

  return (
    <Grid
      id={"te-humbur"}
      container
      item
      sx={{
        justifyContent: "start",
        padding: "0.2rem 2rem",
      }}
    >
      <Grid item container sx={{ justifyContent: "start", mt: "1rem" }}>
        <Typography
          sx={{ fontFamily: "Product sans", fontSize: "1rem" }}
          color="yellow"
        >
          Raportime
        </Typography>
      </Grid>
      <Grid container>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Cocon",
            fontWeight: 500,
          }}
        >
          Kafshe te humbura
        </Typography>
      </Grid>

      <Grid item direction={"column"} sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontFamily: "Cocon",
            fontSize: "1.1rem",
          }}
          gutterBottom
        >
          Te humbur
        </Typography>
        <Divider
          sx={{
            width: "70%",
            height: "0.18rem",
            borderBottomColor: "transparent",
            backgroundColor: "yellow",
            boxShadow: "5px 8px 6px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Grid>
      {/* <Grid
      container
      direction={"row"}
      sx={{
        justifyContent: "start",
        mt: "1rem",
        mb: "1rem",
        display: "flex",
        overflowX: "auto", // Add this style
        whiteSpace: "nowrap",
      }}
    > */}
      <Grid
        sx={{
          width: "100%",
          overflow: "scroll",
          pb: 3,
          display: "flex",
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {missingPets?.map((pet: any) => (
          <Grid key={pet.id} item>
            <MissingPetCard {...pet} />
          </Grid>
        ))}
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default MissingPetsSection;
