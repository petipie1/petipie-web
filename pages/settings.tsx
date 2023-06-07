
import React from "react";

export default function Settings({ apiUrl, version, apiKey }: any) {

  const api = process.env.API_BASE_URL;
  return (
    <div>
      <p>{`CS: ${api}`}</p>
      <p>{`SSR: ${apiUrl}`}</p>
      <p>{`ApiKey: ${apiKey}`}</p>
      <p>{`Version: ${version}`}</p>
    </div>);
}

export async function getServerSideProps() {

  return {
    props: {
      apiUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
      version: process.env.REACT_APP_VERSION ?? "nothing"
    }
  };
}
