/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { CheckinServices } from 'services/api';
import style from './style.module.scss';

interface IState {
  auth: any;
}
interface propType {
  buttonContent: string;
}

const OnSuccess = ({ buttonContent }: propType): ReactElement => {
  const time = new Date();
  const [counter, setCounter] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [infor, setInfor] = useState<DataAddCheckin>({
    StaffID: 0,
    TimeCheckin: 0,
  });
  const [name, setName] = useState<string>('');
  const history = useHistory();
  const location = useLocation();
  const avatar = localStorage.getItem('img');
  const { isLoggedIn } = useSelector((state: IState) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) history.push('/login');
  }, []);

  useEffect(() => {
    if (location.state.person_id && typeof +location.state.person_id === 'number') {
      (async () => {
        const timeCheckin = new Date();
        timeCheckin.setHours(timeCheckin.getHours() + 7);

        const inforCheckin: DataAddCheckin = {
          StaffID: typeof +location.state.person_id === 'number' && +location.state.person_id,
          TimeCheckin: Math.round(+timeCheckin / 1000),
        };
        setInfor(inforCheckin);
        const resStaff = await CheckinServices.getStaffDetail(location.state.person_id);
        if (resStaff.FirstName && resStaff.LastName) {
          setName(`${resStaff.LastName} ${resStaff.FirstName}`);
          setLoading(true);
        }
      })();
    }
  }, [location.state.person_id]);

  const weekday: string[] = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  const daytime: string[] = [
    'Chào Buổi Sáng',
    'Chào Buổi Trưa',
    'Chào Buổi Chiều',
    'Chào Buổi Tối',
  ];

  const curDayTime = (curTime: number): string => {
    let value = 0;
    if (curTime < 11) {
      value = 0;
    } else if (curTime < 14) {
      value = 1;
    } else if (curTime < 18) {
      value = 2;
    } else if (curTime < 24) {
      value = 3;
    }
    return daytime[value];
  };

  const reScanBtn = (): void => {
    history.push('/checkin');
  };

  const _handleReturnHomePage = async (): Promise<void> => {
    const res = await CheckinServices.addCheckin(infor);
    if (res) {
      history.push('/');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      (async () => {
        const res = await CheckinServices.addCheckin(infor);
      })();
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
    <>
      {loading && name.length > 0 ? (
        <div className={style.homeBody}>
          <div className={style.bodyWrapper}>
            <div className={style.baseScreenshot}>
              <div className={`${style.corner} ${style.cornerUpleft}`} />
              <div className={`${style.corner} ${style.cornerUpright}`} />
              <div className={`${style.corner} ${style.cornerDownleft}`} />
              <div className={`${style.corner} ${style.cornerDownright}`} />
              <img className={style.capturePicture} src={avatar} alt="" />
            </div>
            <div className={style.greeting}>
              <div className={style.timestamp}>
                <span>{weekday[time.getDay()] + ', ' + time.toLocaleDateString()}</span>
                <br />
                <span>
                  {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className={style.greetingName}>
                <span>{curDayTime(time.getHours())}</span>
                <br />
                <span>{name}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button
                  className={style.cancelBtn}
                  type="button"
                  onClick={_handleReturnHomePage}
                  style={{ marginBottom: '1rem' }}>
                  Về trang chủ
                </button>
                <button className={style.cancelBtn} type="button" onClick={reScanBtn}>
                  {buttonContent} {counter}s
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OnSuccess;
