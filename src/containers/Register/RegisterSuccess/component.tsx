import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import style from './style.module.scss';

const RegisterSuccess = () => {
  const history = useHistory();
  const [counter, setCounter] = useState<number>(20);

  const _handleReturnBtn = (): void => {
    history.push('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      history.push('/');
    }
    return () => {
      if (counter > 0) {
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        history.push('/');
      }
    };
  }, [counter]);

  return (
    <div className={style.registerBody}>
      <div className={style.bodyWrapper}>
        <div className={style.successCaption}>Đăng Kí Thành Công</div>
        <button className={style.returnBtn} type="button" onClick={_handleReturnBtn}>
          Trở về ({counter})
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
