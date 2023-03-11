/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LOGIN_FAIL, LOGIN_SUCCESS } from './actionTypes';
import { LoginServices } from 'services/api';

export const login = (secretKey: string) => dispatch => {
  return LoginServices.login(secretKey).then(
    data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      localStorage.setItem('user', data.Branch);
      localStorage.setItem('secretKey', data.Secretkey);
      return 'Success';
    },
    error => {
      console.log(error);
      dispatch({ type: LOGIN_FAIL });
      return error;
    }
  );
};
