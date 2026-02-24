import React from "react";
import Head from "next/head";
import { Button } from "@mui/material";
import Link from "next/link";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import NavMenu from "../components/NavMenu";
import FirstSection from "../components/FirstSection";
import WhatIsSection from "../components/WhatIsSection";
import UsageSection from "../components/UsageSection";
import WhyNeedItSection from "../components/WhyNeedItSection";
import OrderModelSection from "../components/OrderModelSection";
import MissingPetsSection from "../components/LandingPageSections/MissingPetsSection";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import { menuItems } from "../common/constants";
// import missingPetsService from "../services/missing-pets.service";

export default function Home({ missingPets = [] }: any) {
  return (
    <>
      <Container sx={{ overflow: "hidden" }}>
        {/* <div style={{
        background: "linear-gradient(#FCDF7B, #FF724D)", position: "fixed",
        zIndex: -1, height: "100%", width: "100%"
      }} >
      </div> */}
        <NavMenu items={menuItems} icon="/icons/ic_header.png" />
        {/* <div> */}
        {/* <div className={styles.container}> */}
        <Head>
          <title>Petipie - Mbroni miqtë e vegjël</title>
          <meta name="description" content="petipie.online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FirstSection />
        {/* Demo Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Link href="/demo" passHref>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #FF724D, #FCDF7B)",
                color: "white",
                fontWeight: "bold",
                padding: "12px 32px",
                borderRadius: "30px",
                fontSize: "16px",
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(255, 114, 77, 0.4)",
                "&:hover": {
                  background: "linear-gradient(45deg, #e5623f, #f0d06e)",
                },
              }}
            >
              🐾 Shiko Demo
            </Button>
          </Link>
        </div>
        <WhatIsSection />
        <UsageSection />
        <OrderModelSection />
        <OrderForm />
        <MissingPetsSection missingPets={missingPets} />
        <WhyNeedItSection />
      </Container>
      <Footer />
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}

// export async function getServerSideProps() {
//   const response = await missingPetsService.getMissingPets();
//   const missingPets = response?.data || [];
//   return {
//     props: {
//       missingPets,
//     },
//   };
// }
