import { IRespSkilet } from "../common";

export interface ICreateUserReqData {
  name: string;
  email: string;
  password: string;
}

export interface ILogInUserReqData {
  login: string;
  password: string;
  code?: string;
}

export interface IGetRecoveryPasswordCode {
  email: string;
}

export interface ISetRecoveryPasswordData {
  code: string;
  email: string;
  newPassword: string;
}

export interface ICreateUserResp extends IRespSkilet {
  data: IUserRespData;
}

export interface ILogInUserResp {
  refreshToken: string;
  accessToken: string;
  user: IUserRespData;
}

export interface IUserRespData {
  id: number;
  name: string;
  email: string;
  avatar: string;
  shortName: string;
  balance: number;
}
