import { AxiosInstance } from './axiosInstance';
import { isFalsyValue } from '../../utils/commonUtils';
import { AxiosError } from 'axios';

AxiosInstance.interceptors.request.use(
  (request) => {
    const token = undefined; //TODO: add support for get token properly instead of redux store
    if (token !== undefined && isFalsyValue(token)) {
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      delete request.headers.Authorization;
    }
    return request;
  },
  (error) => {
    throw new Error(error);
  },
);

export const handleServerErrors = async (error: any): Promise<Error> => {
  const status = error?.code ? error?.code : error?.response?.status;
  const responseData = error?.response?.data;

  const errorMessage =
    typeof responseData === 'object' && responseData?.message
      ? responseData.message
      : 'Unknown error occurred.';

  switch (status) {
    case AxiosError.ERR_BAD_REQUEST:
      throw new Error('Bad Request ');
    case 400:
      throw new Error('Request Failed');
    case 401:
      throw new Error('Unauthorized: Please login again.');
    case 403:
      throw new Error(
        "Forbidden: You don't have permission to access this resource.",
      );
    case 404:
      throw new Error('Resource not found.');
    case 500:
      throw new Error('Internal server error. Please try again later.');
    case 502:
      throw new Error('Bad Gateway: Please try again later.');
    default:
      throw new Error(errorMessage);
  }
};

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error?.response?.status;

    if (status !== 200) {
      return await handleServerErrors(error);
    }
    return await Promise.reject(error);
  },
);

export default AxiosInstance;
