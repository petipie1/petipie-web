import { callExternalApi } from "./external-api.service";

const baseURL = process.env.API_BASE_URL;
const notificationUrl = "/api/v1/Notification";

const sendEmailNotification = async ({ locationLink, email }) => {
  const url = `${baseURL}${notificationUrl}`;
  const config = {
    url: url,
    method: "POST",
    headers: {
      "content-type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    data: { locationLink, email },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const notificationService = { sendEmailNotification };

export default notificationService;
