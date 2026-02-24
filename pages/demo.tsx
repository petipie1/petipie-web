// "use client";
import React, { useState } from "react";
import type { NextPage } from "next";
import EmptyView from "components/EmptyView";
import LoadingIndicator from "components/LoadingIndicator";
import Pet from "components/Pet";
import PetForm from "components/PetForm";
// import { getPet } from "services/apiClient";
// import { useTranslation } from "react-i18next";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpDialog from "components/HelpDialog";
// import { petResponse } from "common/constants";
// import { usePet } from "./../../../hooks/usePet";
import { useRouter } from "next/router";
import LoadingScreen from "components/LoadingScreen";
import { usePet } from "hooks/usePet";
// import LoadingScreen from "../../../components/LoadingScreen";

const MenuPage: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const { id } = query;

  // const { isLoading, data: pet, error } = usePet(id);

  const isLoading = false;
  const error = "";

  const pet = {
    Id: "f36a7ba9-afa2-4034-bfc0-82e90f663044",
    Status: "Active",
    Affiliate: "",
    ExternalId: "b6832631-308b-4ef6-a818-09b621d1b69a",
    SubscriptionEndDate: "",
    Data: {
      city: "Tirane",
      info: "Kthen koken kur e therret",
      name: "Lana",
      breed: "Corgi",
      gender: "Femer",
      styles: {
        avatarBg: "Sweet Morning",
      },
      orderCode: "111",
      ownerInfo: {
        name: "Bernard M",
        address: "Rr. e Durresit",
        contact: {
          email: "petipie1@gmail.com",
          phone: "+355686284516",
          whatsapp: "+355686284516",
          instagram: "petipie.online",
        },
      },
      missingMessage: "Ju lutem kontaktoni sa me shpejte nese e gjeni!",
      contactUsIntead: false,
    },
    CreatedAt: "2023-11-14 18:30:51.350 +0100",
    UpdatedAt: "2023-11-14 18:30:51.350 +0100",
  };

  const [dialogOpen, setDialogOpen] = useState(pet?.Status === "New");

  // const { i18n } = useTranslation();

  // const lang = "al"; // ?? pet?.data?.lang ?? "al",
  // useEffect(() => {
  //   // setMounted(true);
  //   if (lang) {
  //     i18n.changeLanguage(lang);
  //   }
  // }, []);

  // const dateNotPassed =
  //   new Date(pet.subscriptionEndDate).getTime() > new Date().getTime();

  let alMessage = "";
  let enMessage = "";
  if (!pet || error) {
    alMessage = "Nuk ka te dhena!";
    enMessage = "(No data found!)";
  } else if (pet?.Status == "Inactive" || pet?.Status == "Awaiting") {
    alMessage = "Nuk eshte aktiv!";
    enMessage = "(Not available!)";
  }

  // if (!mounted || !id) return <div>Loading...</div>;

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading || isLoading) {
    return <LoadingScreen />;
  }

  if (alMessage) return <EmptyView alTitle={alMessage} enTitle={enMessage} />;

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
      {/* Info Icon */}
      <InfoOutlinedIcon
        sx={{
          position: "absolute",
          top: "15px",
          right: "15px",
          cursor: "pointer",
          // opacity: 0.75,
          color: "white",
        }}
        onClick={handleDialogOpen}
      />

      {/* Help Dialog */}
      <HelpDialog open={dialogOpen} handleClose={handleDialogClose} />

      {/* Pet info or form */}
      {pet.Status == "New" ? (
        <PetForm {...pet} />
      ) : (
        <Pet pet={pet.Data} status={pet?.Status} />
      )}
    </>
  );
};

export default MenuPage;
// export async function getServerSideProps(ctx: any) {
//   const { id, lang } = ctx.query;
//   const response = await getPet(id);
//   const pet = response?.data;
//   // const pet = petResponse;

//   return {
//     props: {
//       pet,
//       lang: lang ?? pet?.data?.lang ?? "al",
//     },
//   };
// }
