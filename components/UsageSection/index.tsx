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
          "Ndihmo qenin/macen qe ka humbur duke skanuar kodin QR ne varese."
        }
      />
      <HowItWorksCard
        icon="/how_works_2.png"
        title={"2. Kontakto pronarin"}
        description={`Zgjidhni nje prej formave te kontaktit
        (telefon, WhatsApp, Instagram etj)
        te pronarint te qenit/maces.`}
      />
      <HowItWorksCard
        icon="/how_works_3.png"
        title={"3. Dorezojeni"}
        description={`Me pas ju mbetet per ta dorezuar
        qenin/macen tek pronari ose kontakto
        plaftorment tone direkt.`}
      />
    </Grid>
  </Grid>
);

export default UsageSection;
