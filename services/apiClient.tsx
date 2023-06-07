import axios from "axios";

export interface Response<TData> {
  statusText: string;
  status: number;
  error: any;
  data: TData;
}

interface CreateOrderRequest {
  businessId: string;
  status: string;
  orderCode?: string;
  total: number;
  currency: string;
  items: any
  notes?: any;
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

export const getBusinessMenu = async (
  businessId: number,
  umbrella?: number,
): Promise<any> => {
  try {
    var response = await ax.get<any>(`/api/v1/Business/${businessId}/${umbrella}`, {
      headers: { "Authorization": `Bearer ${process.env.API_KEY}` }
    });
    return response;//successResponse<PaymentStatus>(response);
  } catch (error) {
    console.log("error", error);
    return null; //errorResponse<any>(error);
  }
};

export const postOrder = async (orderRequest: CreateOrderRequest): Promise<Response<any>> => {
  const response = await ax.post("/api/v1/Order", orderRequest,
    {
      headers: { "Authorization": `Bearer ${process.env.API_KEY}` }
    });
  return response.data;
};

export const callWaiter = async (callWaiterRequest: CallWaiterRequest): Promise<Response<any>> => {
  const response = await ax.post("/api/v1/Order/callWaiter", callWaiterRequest, {
    headers: { "Authorization": `Bearer ${process.env.API_KEY}` }
  });
  return response.data;
};

