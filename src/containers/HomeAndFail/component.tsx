/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';
import Phone from 'components/Phone';

interface IState {
  auth: any;
}
interface propType {
  content: string;
  note: string;
  buttonContent: string;
  isHome: boolean;
}

const Home = ({ content, note, buttonContent, isHome }: propType): ReactElement => {
  const [counter, setCounter] = useState<number>(5);
  const history = useHistory();
  const { isLoggedIn } = useSelector((state: IState) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) history.push('/login');
  }, []);

  useEffect(() => {
    if (!isHome) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => {
        if (counter > 0) {
          clearTimeout(timer);
        } else {
          clearTimeout(timer);
          history.push('/checkin');
        }
      };
    }
  }, [counter]);

  const _handleCheckinPage = (): void => {
    if (isHome) history.push('/checkin');
    else history.push('/checkin');
  };

  const _handleHomePage = (): void => {
    history.push('/');
  };

  return (
    <div className={style.homeBody}>
      <div className={style.bodyWrapper}>
        <Phone stylePhone={{ transform: 'rotate3d(1,1,-1,53deg)', marginLeft: '25rem' }} />
        <div className={style.quoteButton}>
          <div className={style.quote}>
            <span>{content}</span>
          </div>
          <div className={style.author}>
            <span>{note}</span>
          </div>
          {isHome ? (
            <button
              className={`${style.button} ${style.btnOnly}`}
              type="button"
              onClick={_handleCheckinPage}>
              {buttonContent}
            </button>
          ) : (
            <div className={style.buttonWrapper}>
              <button
                className={`${style.button} ${style.btnMargin}`}
                type="button"
                onClick={_handleCheckinPage}>
                {buttonContent} {counter}s
              </button>
              <button className={style.button} type="button" onClick={_handleHomePage}>
                Về trang chủ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
