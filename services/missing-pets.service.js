import { callExternalApi } from "./external-api.service";

const baseURL = process.env.API_BASE_URL;
const missingPetsUrl = "/api/v1/MissingPet";

const getMissingPets = async () => {
  let url = `${baseURL}${missingPetsUrl}/summary`;
  const config = {
    url: url,
    method: "GET",
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

const missingPetsService = { getMissingPets };

export default missingPetsService;
