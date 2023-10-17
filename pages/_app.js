import React from "react";
import "../styles/globals.css";
// import '../styles.css';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "./../i18n";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    yellow: "#FFDC26",
    cream: "#FFF9F4",
  },
});

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>Petipie | Mbroni miqtë e vegjël</title>
          <meta name="description" content="Petipie" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
