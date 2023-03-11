import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';

const IdRegisteration = () => {
  const history = useHistory();
  const [id, setId] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setId(text);
  };

  const _handleFaceScan = (): void => {
    history.push('/register/facescan');
  };

  return (
    <div className={style.homeBody}>
      <div className={style.bodyWrapper}>
        <h1> Mã Nhân Viên </h1>
        <div className={style.formIdInput}>
          <div className={style.idCaption}>
            <span>VU -</span>
          </div>
          <input
            className={style.idInput}
            placeholder="Nhập ID của nhân viên"
            onChange={onInputChange}
          />
        </div>
        <button type="button" className={style.registerBtn} onClick={_handleFaceScan}>
          Xác Nhận
        </button>
      </div>
    </div>
  );
};

export default IdRegisteration;
