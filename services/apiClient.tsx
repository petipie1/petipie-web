import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getBusinessMenu = async (
  businessId: number,
  umbrella?: number,
): Promise<any> => {
  try {
    var response = await axios.get<any>(
      `${process.env.API_URL}/api/v1/business/${businessId}/${umbrella}`,
    );
    return response;//successResponse<PaymentStatus>(response);
  } catch (error) {
    console.log('error', error);
    return null; //errorResponse<any>(error);
  }
};

