import axios from '../axios';
import { GenericResponseBody } from '../types';
import {
  LoginCredentialsModel,
  LoginResponseModel,
  RegisterModel,
  RegisterResponseModel,
} from './types';

export * from './types';

export const login = async (userCredetial: LoginCredentialsModel): Promise<LoginResponseModel> => {
  const response = await axios.post('/user/login', {
    ...userCredetial,
  });
  return response.data as LoginResponseModel;
};

export const register = async (userInfo: RegisterModel): Promise<RegisterResponseModel> => {
  const response = await axios.post('/user/register', {
    ...userInfo,
  });
  return response.data as RegisterResponseModel;
};
