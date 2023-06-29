
import React from "react";

// fe563c91-e3f2-4dbd-9f35-67cce23758ad
export default function Settings({ apiUrl, apiKey }: any) {

  const api = process.env.API_BASE_URL;
  return (
    <div>
      <p>{`CS: ${api}`}</p>
      <p>{`SSR: ${apiUrl}`}</p>
      <p>{`ApiKey: ${apiKey}`}</p>
    </div>);
}

export async function getServerSideProps() {

  return {
    props: {
      apiUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
    }
  };
}
