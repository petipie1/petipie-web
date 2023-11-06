import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import HowItWorksCard from "components/HowItWorksCard";

const UsageSection = () => (
  <Grid container item sx={{ justifyContent: "center", mt: "3rem" }}>
    <Grid item container sx={{ justifyContent: "center" }}>
      <Typography
        sx={{ fontFamily: "Product sans", fontSize: "1rem" }}
        color="yellow"
      >
        Perdorimi
      </Typography>
    </Grid>
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Cocon",
        fontSize: "1.5rem",
        fontWeight: 500,
      }}
    >
      Si funksionon?
    </Typography>
    <Grid container item sx={{ justifyContent: "space-evenly", mt: "1rem" }}>
      <HowItWorksCard
        icon="/how_works_1.png"
        title={"1. Skano kodin QR"}
        description={
          "Skano QR kodin ne varëse me anë te kameras të smartphone-it tuaj."
        }
      />
      <HowItWorksCard
        icon="/how_works_2.png"
        title={"2. Kontakto pronarin"}
        description={`Zgjidhni një prej formave të kontaktit
        (telefon, WhatsApp, Instagram etj)
        të pronarit të qenit ose maces.`}
      />
      <HowItWorksCard
        icon="/how_works_3.png"
        title={"3. Dorëzo"}
        description={
          "Duke ju falenderuar, më pas është në dorën tuaj nëse do ta dorëzoni apo të prisni pronarin të vijë tek ju."
        }
      />
    </Grid>
  </Grid>
);

export default UsageSection;
