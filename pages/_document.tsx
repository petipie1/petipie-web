import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
// import theme from '../theme';
// { roboto }
export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="apple-touch-icon" sizes="120x120" href="/ProfilePlaceholder.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/ProfilePlaceholder.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/ProfilePlaceholder.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}