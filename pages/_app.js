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
        <title>Shije Vere</title>
        <meta name="description" content="Summer Vibes" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
