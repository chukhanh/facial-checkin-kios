/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ReactElement, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reducers/actions/auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import style from './style.module.scss';

const MySwal = withReactContent(Swal);

interface IState {
  auth: any;
}

const Login = (): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IState) => state.auth);

  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, []);

  const onUserChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setValue(text);
    if (text !== '') setIsActive(true);
    else setIsActive(false);
  };

  const handleSubmit = (): void => {
    (async () => {
      const data = await dispatch(login(value));
      if (data.toString() === 'Success') {
        MySwal.fire({
          title: 'Đăng nhập thành công',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        history.push('/');
      }
    })();
  };

  return (
    <div className={style.loginScreen}>
      <div className={style.screen}>
        <div className={style.phoneScreen}>
          <div className={style.logo}></div>
        </div>
        <div className={style.form}>
          <div className={style.formInput}>
            <input type="text" value={value} onChange={onUserChange} />
            <label className={isActive ? `${style.userActive}` : ''} htmlFor="text">
              Nhập Key ID
            </label>
          </div>
          <button className={style.formButton} onClick={handleSubmit}>
            Đăng Nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
