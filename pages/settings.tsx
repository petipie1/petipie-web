
import React from "react";

export default function Settings({ apiUrl, version }: any) {

  const api = process.env.API_BASE_URL;
  return (
    <div>
      <p>{`CS: ${api}`}</p>
      <p>{`SSR: ${apiUrl}`}</p>
      <p>{`Version: ${version}`}</p>
    </div>);
}

export async function getServerSideProps() {

  console.log("process.env.API_BASE_URL", process.env.API_BASE_URL);

  return {
    props: {
      apiUrl: process.env.API_BASE_URL,
      version: process.env.REACT_APP_VERSION ?? "nothing"
    }, // will be passed to the page component as props
  };
}
