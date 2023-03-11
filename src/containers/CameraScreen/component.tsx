/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './index.scss';
import Phone from 'components/Phone';
import Camera from 'components/Camera';

interface IState {
  auth: any;
}

const CameraScreen: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>('');
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(40);
  const history = useHistory();
  const { isLoggedIn } = useSelector((state: IState) => state.auth);
  let componentMounted = true;

  useEffect(() => {
    if (!isLoggedIn) history.push('/login');
  }, []);

  useEffect(() => {
    let timer = null;
    if (componentMounted) timer = setTimeout(() => setCounter(counter - 1), 1000);
    return () => {
      componentMounted = false;
      if (counter > 0) {
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        history.push('/');
      }
    };
  }, [counter]);

  useEffect(() => {
    return () => {
      setCounter(40);
      setIsHidden(false);
      setMessage('');
    };
  }, []);

  useEffect(() => {
    if (message) setIsHidden(true);
    else setIsHidden(false);
  }, [message]);

  const handleMessage = useCallback(
    (message: string): void => {
      setMessage(message);
    },
    [message]
  );

  return (
    <div className="CheckInScreen">
      <div className="screen">
        <div className="camera">
          <Camera handleMessage={handleMessage} />
        </div>
      </div>
      <Phone
        stylePhone={{
          transform: 'rotate3d(1,-1,1,43deg)',
          position: 'absolute',
          top: '25%',
          left: '72%',
          zIndex: 10,
        }}
      />
      {isHidden && (message === 'Score Too Slow' || message === 'No Matching Found') ? (
        <div className="message">Không nhận diện được gương mặt</div>
      ) : null}
    </div>
  );
};

export default CameraScreen;
