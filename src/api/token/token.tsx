import { AxiosResponse } from "axios";

import { API_PATHS } from "../API_PATHS";
import { request } from "../utils";
import { ISetServerTokenData } from "@/types/token/token";

export const setServerToken = (data: ISetServerTokenData) => {
  return request({
    method: "POST",
    ...(process.env.NODE_ENV === "development" && {
      baseURL: "http://localhost:3000/",
    }),
    url: API_PATHS.apiRouts.setServerToken,
    data,
  });
};

export const getServerToken = (): Promise<
  AxiosResponse<ISetServerTokenData>
> => {
  return request({
    method: "GET",
    ...(process.env.NODE_ENV === "development" && {
      baseURL: "http://localhost:3000/",
    }),
    url: API_PATHS.apiRouts.getServerToken,
  });
};

export const deleteServerToken = () => {
  return request({
    method: "POST",
    ...(process.env.NODE_ENV === "development" && {
      baseURL: "http://localhost:3000/",
    }),
    url: API_PATHS.apiRouts.deleteServerToken,
  });
};
