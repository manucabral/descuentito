import { api } from "../helpers/api.helper";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ResponseDataType } from "@/types/ResponseDataType";

export const requestHandler = async (
  config: AxiosRequestConfig
): Promise<ResponseDataType> => {
  try {
    const response: AxiosResponse = await api(config);
    return {
      message: "Success",
      body: response.data,
      options: response,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      message: "Error",
      body: axiosError.response?.data,
      options: axiosError.response,
    };
  }
};
