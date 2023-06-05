import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OCTO - Scan</title>
        <meta name="description" content="Octo.al" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/octo-scan.png" alt="Vercel Logo" width={180} height={180} />

        {/* <Button className={styles.scanBtn} variant="outlined" size="medium">Scan QR code.</Button> */}
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment"
          style={{ display: "none" }}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              borderRadius: 2,
              color: "white",
              m: 2,
              fontWeight: 400,
              textTransform: "none",
              fontSize: "16px",
              maxHeight: "45px",
              minWidth: "160px",
              fontFamily: "sans-serif"
            }}
            style={{ backgroundColor: "#020f85" }}
          >
            {"Scan QR Code"}
          </IconButton>
        </label>

        <Grid item direction={"row"}>
          <Typography>
            {"Si funksionon? "}
            <Link href="/demo" variant="outlined" size="medium">
              {"Demo"}
            </Link>
          </Typography>
        </Grid>

      </main>
      <footer >
        <Grid container item>

          <Grid item>
            <Typography style={{ color: "#737373" }}>{"Email: octo@gmail.com"}</Typography>
            <Typography style={{ color: "#737373" }}>{"Contact: 00355686284516"}</Typography>
          </Grid>

          <Grid container item>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{""}
              <span className={styles.logo_text}>
                Octo.al
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
              </span>
            </a>
          </Grid>

        </Grid>
      </footer>
    </div >
  );
}
