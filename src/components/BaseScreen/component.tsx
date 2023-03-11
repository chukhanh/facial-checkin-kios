import React, { ReactElement } from 'react';

import style from './style.module.scss';
import { ReScaleBaseScreen } from './BaseScreen.style';

type TProps = {
  scale: string;
};

const BaseScreen = ({ scale }: TProps): ReactElement => (
  <ReScaleBaseScreen scaleScreen={scale}>
    <div className={style.baseScreenshot}>
      <div className={`${style.corner} ${style.cornerUpleft}`} />
      <div className={`${style.corner} ${style.cornerUpright}`} />
      <div className={`${style.corner} ${style.cornerDownleft}`} />
      <div className={`${style.corner} ${style.cornerDownright}`} />
    </div>
  </ReScaleBaseScreen>
);

export default BaseScreen;
