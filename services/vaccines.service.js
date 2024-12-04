import { callExternalApi } from "./external-api.service";

const baseURL = process.env.API_BASE_URL;
// const vaccinesUrl = "/api/v1/Vaccines";

// export const getPublicResource = async () => {
//   const config = {
//     url: `${baseURL}/api/messages/public`,
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//     },
//   };

//   const { data, error } = await callExternalApi({ config });

//   return {
//     data: data || null,
//     error,
//   };
// };

// export const getProtectedResource = async (accessToken) => {
//   const config = {
//     url: `${baseURL}/api/messages/protected`,
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };

//   const { data, error } = await callExternalApi({ config });

//   return {
//     data: data || null,
//     error,
//   };
// };

const getVaccines = async (petId) => {
  // let url = `${baseURL}${vaccinesUrl}/${petId}`;
  // const config = {
  //   url: url,
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/json",
  //     //   Authorization: `Bearer ${token}`,
  //   },
  // };
  console.log("petId", petId);

  const vaccineList = [
    {
      title: "Rabbies Vaccination",
      clinic: "Dr House",
      date: "October 14, 2023",
      notes: "Should be done again in a week",
    },
    {
      title: "Parasites Vaccination",
      clinic: "Vet Hospital",
      date: "April 21, 2023",
    },
  ];
  // eslint-disable-next-line no-undef
  const { data, error } = await Promise.resolve({
    data: vaccineList,
    error: null,
  }); // callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const addVaccine = async (addVaccineRequest) => {
  const url = `${baseURL}${vaccinesService}`;
  const config = {
    url: url,
    method: "POST",
    data: addVaccineRequest,
    headers: {
      "content-type": "application/json",
      //   Authorization: `Bearer ${token}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const vaccinesService = { getVaccines, addVaccine };

export default vaccinesService;
