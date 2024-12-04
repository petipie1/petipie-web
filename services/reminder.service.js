import { callExternalApi } from "./external-api.service";

const baseURL = process.env.API_BASE_URL;
const remindersUrl = "/api/v1/Reminders";

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

const getReminders = async (petId) => {
  // let url = `${baseURL}${remindersUrl}/${petId}`;
  // const config = {
  //   url: url,
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/json",
  //     //   Authorization: `Bearer ${token}`,
  //   },
  // };
  console.log(petId);

  const remindersList = [
    {
      title: "Rabbies Vaccination",
      clinic: "Dr house",
      date: "23 Mar 2023",
      notes: "Should be done again in a week",
    },
    {
      title: "Parasites Vaccination",
      clinic: "Vet Hospital",
      date: "22 Feb 2024",
    },
  ];
  // eslint-disable-next-line no-undef
  const { data, error } = await Promise.resolve({
    data: remindersList,
    error: null,
  }); // callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const addReminder = async (addReminderRequest) => {
  const url = `${baseURL}${remindersUrl}`;
  const config = {
    url: url,
    method: "POST",
    data: addReminderRequest,
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

const reminderService = { getReminders, addReminder };

export default reminderService;
