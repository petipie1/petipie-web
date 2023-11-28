import { callExternalApi } from "./external-api.service";

const baseURL = process.env.API_BASE_URL;
const orderUrl = "/api/v1/Order";

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

const getOrdersByStatus = async ({ status, from, to, token }) => {
  let url = `${baseURL}${orderUrl}/summary?status=${status}`;
  if (from) url += `&from=${from}`;

  if (to) url += `&to=${to}`;

  const config = {
    url: url,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const updateOrderStatus = async ({ orderId, status, token }) => {
  const url = `${baseURL}${orderUrl}/${orderId}?status=${status}`;
  const config = {
    url: url,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

const orderService = { getOrdersByStatus, updateOrderStatus };

export default orderService;
