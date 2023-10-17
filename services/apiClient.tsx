import axios from "axios";

export interface Response<TData> {
  statusText: string;
  status: number;
  error: any;
  data: TData;
}

interface CreateOrderRequest {
  name: string;
  status: string;
  // orderCode?: string;
  // total: number;
  // currency: string;
  items: any;
  address: any;
  phone: any;
}

interface ActivatePetRequest {
  data: any;
  orderCode?: string;
  status: string;
}

interface CallWaiterRequest {
  recipient: string;
  umbrella: string;
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const ax = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 30000,
  headers: {
    Authorization: process.env.API_KEY ?? "",
  },
});

export const getPet = async (id: number): Promise<any> => {
  try {
    var response = await ax.get<any>(`/api/v1/Pet/${id}`, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    });
    return response; //successResponse<PaymentStatus>(response);
  } catch (error) {
    console.log("error", error);
    return null; //errorResponse<any>(error);
  }
};

export const activatePet = async (
  externalId: string,
  activatePetRequest: ActivatePetRequest
): Promise<Response<any>> => {
  const response = await ax.put(
    `/api/v1/pet/${externalId}`,
    activatePetRequest,
    {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    }
  );
  return response.data;
};

export const createOrder = async (
  orderRequest: CreateOrderRequest
): Promise<Response<any>> => {
  const response = await ax.post("/api/v1/Order", orderRequest, {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` },
  });
  return response.data;
};

export const callWaiter = async (
  callWaiterRequest: CallWaiterRequest
): Promise<Response<any>> => {
  const response = await ax.post(
    "/api/v1/Order/callWaiter",
    callWaiterRequest,
    {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    }
  );
  return response.data;
};
