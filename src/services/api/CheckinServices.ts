/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios';

export const checkin = async (data: any): Promise<any> => {
  const customInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_FACIAL_CHECKIN,
  });

  const secretKey = localStorage.getItem('secretKey');
  const res = await customInstance.post(`/kiosk/checkin?secretkey=${secretKey}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const getStaffDetail = async (staffID: string): Promise<Staff> => {
  const customInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_FACIAL_CHECKIN,
  });
  const reqStaffID =
    staffID === 'test_paytouch02'
      ? '8330'
      : staffID === 'ThanhVo'
      ? '8331'
      : staffID === 'MinhTesting'
      ? '8329'
      : staffID;
  const res = await customInstance.get(`/staff/staffInformationDetail?id=${reqStaffID}`);
  return res.data.staffinfo;
};

export const addCheckin = async (data: DataAddCheckin): Promise<DataAddCheckin | string> => {
  const customInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_FACIAL_MANAGE,
  });

  if (typeof data.StaffID !== 'number') return 'errror';

  const res = await customInstance.post('/checkin/addcheckin', data);
  return res.data;
};
