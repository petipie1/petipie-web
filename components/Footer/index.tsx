import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  const socials = [
    {
      icon: "/ic_contact_insta.png",
      ur: "url",
    },
    {
      icon: "/ic_contact_tiktok.png",
      ur: "url",
    },
    {
      icon: "/ic_contact_twitter.png",
      ur: "url",
    },
    {
      icon: "/ic_contact_web.png",
      ur: "url",
    },
  ];

  return (
    // <Box
    //   // Set the background color
    //   color="white" // Set the text color
    //   textAlign="center"
    //   py={1}
    //   marginTop={5}
    // >
    //   <Typography variant="body1" color={"whitesmoke"}>
    //     Na kontaktoni:
    //   </Typography>
    //   <Typography variant="body2" color={"whitesmoke"}>
    //     Email: petipie1@gmail.com
    //   </Typography>
    //   <Typography variant="body2" color={"whitesmoke"}>
    //     Tel: +355686284516
    //   </Typography>
    // </Box>
    <footer>
      <Grid
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
            <Grid
              item
              key={social?.icon - idx}
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
          ))}
        </Grid>
        <Grid
          item
          direction={"column"}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          {/* <Typography
                sx={{
                  fontFamily: "sans-serif",
                  height: "1.5em",
                  fontSize: "0.5rem",
                  color: "whitesmoke",
                }}
              >
                petipie1@gmail.com
              </Typography>
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  height: "1.5em",
                  fontSize: "0.5rem",
                  color: "whitesmoke",
                }}
              >
                +355686284516
              </Typography> */}
        </Grid>

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
