import * as React from "react";
import { Button, Grid } from "@mui/material";

const circularButtonStyles = {
  borderRadius: "50%",
  width: "65px",
  height: "65px",
  minWidth: "auto",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&.MuiButton-root": {
    backgroundColor: "white",
    color: "white",
  },
};

interface ContactsProps {
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  email?: string;
}

const Contacts = (contact: ContactsProps) => (
  <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 1 }}>
    {contact?.phone && (
      <Grid item>
        <a href={`tel:${contact?.phone}`}>
          <Button variant="contained" sx={circularButtonStyles}>
            <img
              src={"/ic_phone.png"}
              width={35}
              height={35}
              alt="Email Icon"
              color="white"
            />
          </Button>
        </a>
      </Grid>
    )}
    {contact?.whatsapp && (
      <Grid item>
        <a
          href={`https://api.whatsapp.com/send?phone=${contact?.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="contained" sx={circularButtonStyles}>
            <img
              src={"/ic_whatsapp.png"}
              width={35}
              height={35}
              alt="Email Icon"
              color="white"
            />
          </Button>
        </a>
      </Grid>
    )}
    {contact?.instagram && (
      <Grid item>
        <a href={`https://www.instagram.com/${contact?.instagram}`}>
          <Button variant="contained" sx={circularButtonStyles}>
            <img
              src={"/ic_instagram.png"}
              width={35}
              height={35}
              alt="Email Icon"
              color="white"
            />
          </Button>
        </a>
      </Grid>
    )}
    {contact?.email && (
      <Grid item>
        <a href={`mailto:${contact?.email}`}>
          <Button variant="contained" sx={circularButtonStyles}>
            <img
              src={"/ic_email.png"}
              width={35}
              height={35}
              alt="Email Icon"
              color="white"
            />
          </Button>
        </a>
      </Grid>
    )}
  </Grid>
);

export default Contacts;
