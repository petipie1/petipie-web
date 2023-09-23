import React from "react";
import "../styles/globals.css";
// import '../styles.css';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "./../i18n";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Petipie | Mbroni miqtë e vegjël</title>
        <meta name="description" content="Petipie" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
