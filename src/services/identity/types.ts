/* eslint-disable @typescript-eslint/ban-types */
import { GenericResponseBody } from '../types';

export type LoginCredentialsModel = {
  email: string;
  password: string;
};

export type LoginResponData = {
  name: string;
  refreshToken: string;
  role: number;
  token: string;
  userID: number;
  session?: string;
};
export type LoginResponseModel = GenericResponseBody<LoginResponData>;

// Register user
export type RegisterModel = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterResponseModel = GenericResponseBody<{}>;
