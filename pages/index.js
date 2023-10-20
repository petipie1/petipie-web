import React from "react";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import NavMenu from "./../components/NavMenu";
import FirstSection from "./../components/FirstSection";
import WhatIsSection from "./../components/WhatIsSection";
import UsageSection from "./../components/UsageSection";
import WhyNeedItSection from "./../components/WhyNeedItSection";
import OrderModelSection from "./../components/OrderModelSection";
import OrderForm from "./../components/OrderForm";
import Footer from "./../components/Footer";
import { Container } from "@mui/material";
import { menuItems } from "./../common/constants";

export default function Home() {
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
          <title>Petipie - Scan</title>
          <meta name="description" content="petipie.online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FirstSection />
        <WhatIsSection />
        <UsageSection />
        <OrderModelSection />
        <OrderForm />
        <WhyNeedItSection />
      </Container>
      <Footer />
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}
