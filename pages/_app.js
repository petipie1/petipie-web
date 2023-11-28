import React from "react";
import "../styles/globals.css";
// import '../styles.css';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "./../i18n";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";

const theme = createTheme({
  palette: {
    yellow: "#FFDC26",
    cream: "#FFF9F4",
    turquoise: "#00A6A3",
  },
});

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: "https://petipie.online/admin",
          // redirect_uri: "http://localhost:3000/admin", // FOR TESTING LOCALLY
          audience: process.env.AUTH0_AUDIENCE,
        }}
      >
        <Provider store={store}>
          <Head>
            <title>Petipie | Mbroni miqtë e vegjël</title>
            <meta name="description" content="Petipie" />
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Auth0Provider>
    </ThemeProvider>
  );
}

export default MyApp;
