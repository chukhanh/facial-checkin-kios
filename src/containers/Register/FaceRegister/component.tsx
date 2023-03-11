import React from 'react';

import style from './style.module.scss';

const FaceRegister = () => {
  return (
    <div className={style.faceRegisterBody}>
      <div className={style.bodyWrapper}>
        <div className={style.mainScreenWrapper}>
          <div className={style.mainScreen}>
            <div className={style.baseScreenshot}>
              <div className={`${style.corner} ${style.cornerUpleft}`} />
              <div className={`${style.corner} ${style.cornerUpright}`} />
              <div className={`${style.corner} ${style.cornerDownleft}`} />
              <div className={`${style.corner} ${style.cornerDownright}`} />
            </div>
          </div>
        </div>
        <div className={style.capturedScreenWrapper}>
          <div className={`${style.smallScreen} ${style.resizeSm}`}>
            <div className={style.baseScreenshot}>
              <div className={`${style.corner} ${style.cornerUpleft}`} />
              <div className={`${style.corner} ${style.cornerUpright}`} />
              <div className={`${style.corner} ${style.cornerDownleft}`} />
              <div className={`${style.corner} ${style.cornerDownright}`} />
            </div>
          </div>
          <div className={`${style.smallScreen} ${style.resizeSm}`}>
            <div className={style.baseScreenshot}>
              <div className={`${style.corner} ${style.cornerUpleft}`} />
              <div className={`${style.corner} ${style.cornerUpright}`} />
              <div className={`${style.corner} ${style.cornerDownleft}`} />
              <div className={`${style.corner} ${style.cornerDownright}`} />
            </div>
          </div>
          <div className={`${style.smallScreen} ${style.resizeSm}`}>
            <div className={style.baseScreenshot}>
              <div className={`${style.corner} ${style.cornerUpleft}`} />
              <div className={`${style.corner} ${style.cornerUpright}`} />
              <div className={`${style.corner} ${style.cornerDownleft}`} />
              <div className={`${style.corner} ${style.cornerDownright}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRegister;
