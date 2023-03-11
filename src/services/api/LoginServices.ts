import Axios from 'axios';
interface ILoginRequest {
  Branch: string;
  Groupname: string;
  Secretkey: string;
  code: number;
}

export const login = async (data: string): Promise<ILoginRequest> => {
  const customInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_FACIAL_CHECKIN,
  });
  const res = await customInstance.post('/checkin/checkvalidkey', {
    Secretkey: data,
  });
  return res.data;
};
