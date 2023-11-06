import React, { useState } from "react";
import type { NextPage } from "next";
import EmptyView from "components/EmptyView";
// import { useTranslation } from "react-i18next";
import LoadingIndicator from "components/LoadingIndicator";
import Pet from "components/Pet";
import PetForm from "components/PetForm";
import { getPet } from "services/apiClient";
// import { petResponse } from "common/constants";

const MenuPage: NextPage = ({ pet }: any) => {
  // const { t } = useTranslation();
  const [isLoading] = useState(false);

  const dateNotPassed =
    new Date(pet.subscriptionEndDate).getTime() > new Date().getTime();

  let alMessage = "";
  let enMessage = "";
  if (!pet) {
    alMessage = "Nuk ka te dhena!";
    enMessage = "(No data found!)";
  } else if (
    pet.status == "Inactive" ||
    pet.status == "Awaiting" ||
    (pet.status !== "New" && !dateNotPassed)
  ) {
    alMessage = "Nuk eshte aktiv!";
    enMessage = "(Not available!)";
  }

  if (alMessage) return <EmptyView alTitle={alMessage} enTitle={enMessage} />;

  return (
    <>
      <LoadingIndicator isLoading={isLoading} />
      <div
        style={{
          background: "linear-gradient(#FCDF7B, #FF724D)",
          position: "fixed",
          zIndex: -1,
          height: "100%",
          width: "100%",
        }}
      />
      {pet.status == "New" ? (
        <PetForm {...pet} />
      ) : (
        <Pet pet={pet?.data} status={pet?.status} />
      )}
    </>
  );
};

export default MenuPage;

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.query;
  const response = await getPet(id);
  const pet = response?.data;

  // TESTING
  // const response = petResponse;
  // const pet = response;

  return {
    props: {
      pet,
    },
  };

  // if(!pet)
  //return {
  //   redirect: {
  //     destination: '/pet-not-found'
  //   }
  // }
}
