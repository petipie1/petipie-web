import React from "react";
import "../styles/globals.css";
// import '../styles.css';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "./../i18n";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  palette: {
    yellow: "#FFDC26",
    cream: "#FFF9F4",
    turquoise: "#00A6A3",
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300 * 1000,
      // staleTime: 0,
    },
  },
});

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: "https://petipie.online/admin",
            // redirect_uri: "http://localhost:3000/admin", // FOR TESTING LOCALLY
            audience: process.env.AUTH0_AUDIENCE,
          }}
        > */}
        <Provider store={store}>
          <Head>
            <title>Petipie | Mbroni miqtë e vegjël</title>
            <meta name="title" content="Petipie" />
          </Head>
          <Component {...pageProps} />
        </Provider>
        {/* </Auth0Provider> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
