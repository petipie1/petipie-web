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
        <link rel="apple-touch-icon" sizes="120x120" href="/petipie.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/petipie.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/petipie.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Product+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
