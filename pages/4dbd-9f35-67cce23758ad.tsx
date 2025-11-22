import React from "react";

// 4dbd-9f35-67cce23758ad
export default function Settings({ apiUrl, apiKey }: any) {
  const api = process.env.API_BASE_URL;
  return (
    <div>
      <strong>CS: </strong> {api} <br />
      <strong>SSR: </strong> {apiUrl} <br />
      <strong>ApiKey: </strong> {apiKey}
    </div>
  );
}
