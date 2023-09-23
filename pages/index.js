import React from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function Home() {
  return (
    <>
      <div style={{
        background: "linear-gradient(#FCDF7B, #FF724D)", position: "fixed",
        zIndex: -1, height: "100%", width: "100%"
      }} >
      </div>
      <div className={styles.container}>

        <Head>
          <title>Petipie - Scan</title>
          <meta name="description" content="petipie.online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

          {/* <Image src="/octo-scan.png" alt="Vercel Logo" width={180} height={180} /> */}

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
                borderRadius: 8,
                color: "white",
                m: 2,
                fontWeight: 400,
                textTransform: "none",
                fontSize: "18px",
                maxHeight: "45px",
                minWidth: "160px",
                fontFamily: "sans-serif"
              }}
              style={{ backgroundColor: "#184BFF" }}
            >
              {"Skano QR"}
            </IconButton>
          </label>

          {/* <Grid item direction={"row"}>
            <Typography sx={{ fontSize: "18px" }}>
              {"Si funksionon? "}
              <Link href="/demo" variant="outlined" size="medium">
                {"Demo"}
              </Link>
            </Typography>
          </Grid> */}

          {/* <Grid item container sx={{
            justifyContent: "center", alignItems: "center", marginTop: 2,
            display: { sm: "flex", xs: "none", md: "flex", }
          }} > */}
            {/* aspect ratio: 2198x987 */}
            {/* <Image src="/banner_desktop.png" alt="dp" width="1099px" height="493.5px" /> */}
          {/* </Grid> */}

          {/* <Grid item container sx={{
            justifyContent: "center", alignItems: "center", marginTop: 2,
            display: { md: "none", lg: "none", xl: "none", sm: "none" }
          }} > */}
            {/* aspect ratio: 594x3860 */}
            {/* <Image src="/banner_mobile.png" alt="dp" width="396px" height="2573.3px" /> */}
          {/* </Grid> */}
          {/* <Grid item container direction={"column"} justifyContent={"start"} alignContent="start"
            sx={{ marginTop: "50px" }} >
            <Typography variant="h6">
              ⚫ Menu ne çadrat e plazhit
            </Typography>
            <p >
              Duke vendosur menune ne cdo çader plazhi, i mundesoni biznesit tuaj ekspozimin e te gjithe menuse se pijeve apo snacks qe mund te sherbehen nga kamarieri ne çader.
            </p>
          </Grid> */}
          {/* <Grid item container direction={"column"} justifyContent={"start"} alignContent="start"
            sx={{ marginTop: "30px" }} >
            <Typography variant="h6">
              ⚫ Porosi nga çadra
            </Typography>
            <p >
              Pasi menuja eshte e askesueshme ne cdo çader, klientet mund te porosisin lehtesisht nga aty dhe porosia i shkon kamarierit tek kompjuteri apo edhe ne telefon me referencen e çadres nga e cila po vjen porosia.
            </p>
          </Grid> */}
          {/* <Grid item container direction={"column"} justifyContent={"start"} alignContent="start"
            sx={{ marginTop: "30px" }} >
            <Typography variant="h6">
              ⚫ Thirr kamarierin tek çadra
            </Typography>
            <p >
              Klienti mund te therrase kamarierin nga çadra nepermjet nje funksionaliteti te shtuar ne menu.
            </p>
          </Grid> */}
          {/* <Grid item container direction={"column"} justifyContent={"start"} alignContent="start"
            sx={{ marginTop: "30px" }} >
            <Typography variant="h6">
              ⚫ Menu dinamike
            </Typography>
            <p >
              {`Ne baze te orarit qe aksesohet menuja (mengjes, dreke, pasdite apo darke), renditen dhe kategorite (sipas preferences tuaj), per shembull:
`}
            </p>
            <p>
              - Kafet shfaqen ne fillim kur menuja aksesohet ne mengjes
            </p>

            <p>
              - Birrat ose snacks shfaqen ne fillim kur menuja skanohet ne dreke
            </p>
            <p>
              - Koktejlet shfaqen te parat kur menuja skanohet pasdite ose ne darke
            </p>
          </Grid>
          <Grid item container direction={"column"} justifyContent={"start"} alignContent="start"
            sx={{ marginTop: "30px" }} >
            <Typography variant="h6">
              ⚫ Konvertimi automatikisht ne Euro i totalit te porosise
            </Typography>
            <p >
              {"Ne momentin qe nje porosi dergohet te kamarieri, shuma totale konvertohet automatikisht ne EUR (ose USD) ne baze te konvertimit qe keni vendosur ju, psh:"}
            </p>
            <p>
              Nese porosia eshte 1200 lek dhe konvertimin ne EURO ju e keni vendosur 120, atehere totali do te shfaqet 1200 lek (10 EUR).
            </p>
          </Grid> */}
        </main>
        <footer >
          <Grid container item sx={{ justifyContent: "center", alignContent: "center" }}>
            <Grid item direction={"column"} sx={{ justifyContent: "center", alignContent: "center" }}>
              <Typography sx={{
                fontFamily: "sans-serif", height: "1.5em",
                fontSize: "18px",
                color: "whitesmoke"
              }}>
                petipie1@gmail.com
              </Typography>
              <Typography sx={{
                fontFamily: "sans-serif", height: "1.5em",
                fontSize: "18px",
                color: "whitesmoke"
              }}>
                +355686284516
              </Typography>
            </Grid>

            {/* <Grid container item>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{""}
              <span className={styles.logo_text}>
                Shije Vere */}
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            {/* </span>
            </a>
          </Grid> */}

          </Grid>
        </footer>
      </div >
    </>
  );
}
