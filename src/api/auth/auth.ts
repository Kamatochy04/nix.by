import { AxiosResponse } from "axios";

import { API_PATHS } from "../API_PATHS";
import { request } from "../utils";
import {
  ICreateUserReqData,
  ICreateUserResp,
  IGetRecoveryPasswordCode,
  ILogInUserReqData,
  ILogInUserResp,
  ISetRecoveryPasswordData,
} from "@/types/auth/auth";

export const createUser = (
  data: ICreateUserReqData
): Promise<AxiosResponse<ICreateUserResp>> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.createUser,
    data,
  });
};

export const logInUser = (
  data: ILogInUserReqData
): Promise<AxiosResponse<ILogInUserResp>> => {
  return request({
    method: "POST",
    url: API_PATHS.auth.logInUser,
    data,
  });
};

export const getRecoveryPasswordCode = (data: IGetRecoveryPasswordCode) => {
  return request({
    method: "POST",
    url: API_PATHS.auth.recoveryPasswordEmail,
    data,
  });
};

export const setRecoveryPassword = (data: ISetRecoveryPasswordData) => {
  return request({
    method: "POST",
    url: API_PATHS.auth.recoveryPassword,
    data,
  });
};

export const googleLogin = (): Promise<
  AxiosResponse<{ redirectUrl: string }>
> => {
  return request({
    method: "GET",
    ...(process.env.NODE_ENV === "development" && {
      baseURL: "http://localhost:3000/",
    }),
    url: "api/auth/google",
  });
};

export const googleCallback = () => {
  return request({
    method: "GET",
    url: API_PATHS.auth.googleCallback,
  });
};
