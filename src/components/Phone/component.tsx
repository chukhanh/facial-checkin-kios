import React, { ReactElement } from 'react';
import style from './style.module.scss';

interface propType {
  stylePhone: any;
}

const Phone = ({ stylePhone }: propType): ReactElement => {
  return (
    <div className={style.phoneGlass} style={stylePhone}>
      <div className={style.phone}>
        <img src="/scan_face.gif" alt="" />
      </div>
    </div>
  );
};

export default Phone;
