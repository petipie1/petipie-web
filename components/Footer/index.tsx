import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  const socials = [
    {
      icon: "/ic_contact_insta.png",
      url: "https://www.instagram.com/nadotwin",
    },
    {
      icon: "/ic_phone.png",
      url: "tel:+355688803602",
    },
    {
      icon: "/ic_contact_web.png",
      url: "mailto:petipie1@gmail.com",
    },
    {
      icon: "/ic_contact_tiktok.png",
      url: "https://www.instagram.com/nadotwin",
    },
    // {
    //   icon: "/ic_contact_twitter.png",
    //   url: "https://www.instagram.com/nadotwin",
    // },
    // {
    //   icon: "/ic_contact_web.png",
    //   url: "https://www.instagram.com/nadotwin",
    // },
  ];

  return (
    <footer>
      <Grid
        id="footer"
        container
        item
        sx={{
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "yellow",
          minHeight: "80px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "Cocon", mt: 4 }}
          color="whitesmoke"
        >
          Peti
          <span style={{ color: "black" }}>pie</span>
        </Typography>
        <Grid
          item
          container
          sx={{ justifyContent: "center", nContent: "center" }}
        >
          {socials.map((social: any, idx) => (
            <a
              key={social?.icon - idx}
              href={social?.url}
              target="_blank"
              rel="noreferrer"
            >
              <Grid
                item
                sx={{
                  backgroundColor: "white",
                  borderRadius: 4,
                  boxShadow: "0px 5px 6px 3px rgba(0, 0, 0, 0.1)",
                  padding: 1,
                  m: 0.5,
                }}
              >
                <img
                  src={social.icon}
                  alt="Large"
                  style={{ maxWidth: "40px", height: "auto" }}
                />
              </Grid>
            </a>
          ))}
        </Grid>
        <Grid
          item
          direction={"column"}
          sx={{ justifyContent: "center", alignContent: "center" }}
        ></Grid>

        <Grid
          container
          item
          sx={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "black",
            mt: 6,
          }}
        >
          <Typography
            style={{
              color: "white",
              fontFamily: "Product sans",
              fontSize: "0.9rem",
              textAlign: "center",
            }}
          >
            All rights reserved at
            <span
              style={{
                color: "yellow",
                fontFamily: "Cocon",
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              {" "}
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                petipie.online
              </a>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
