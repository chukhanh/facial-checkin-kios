/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useRef, useState, useEffect } from 'react';
import * as facemesh from '@tensorflow-models/facemesh';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import atob from 'atob';
import { useHistory } from 'react-router-dom';
import { CheckinServices } from 'services/api';

import styles from './syle.module.scss';

const Camera = ({ handleMessage }) => {
  const [countShot, setCountShot] = useState(0);
  const webcamReference = useRef(null);
  const history = useHistory();
  let count = 0;
  const videoConstraints = {
    width: 556,
    height: 865,
    facingMode: 'environment',
  };

  useEffect(() => {
    return () => {
      setCountShot(0);
    };
  }, []);

  useEffect(() => {
    if (countShot >= 20) {
      history.push('/fail');
    }
  }, [countShot]);

  useEffect(() => {
    loadFacemesh();
  });

  const loadFacemesh = async () => {
    const model = await facemesh.load({
      inputResolution: { width: 400, height: 400 },
      scale: 0.8,
    });
    setInterval(() => {
      detectFace(model);
    }, 1000);
  };

  const _b64toBlob = dataURI => {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], { type: mimeString });
    return blob;
  };

  const detectFace = async network => {
    if (
      typeof webcamReference.current !== 'undefined' &&
      webcamReference.current !== null &&
      webcamReference.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamReference.current.video;
      const videoWidth = webcamReference.current.video.videoWidth;
      const videoHeight = webcamReference.current.video.videoHeight;

      // Set video width
      webcamReference.current.video.width = 556;
      webcamReference.current.video.height = 865;

      // Make Detections
      try {
        const faceEstimate = await network.estimateFaces(video);
        if (faceEstimate[0] && faceEstimate[0].faceInViewConfidence === 1) {
          if (webcamReference.current) {
            const imageSrc = webcamReference.current?.getScreenshot();
            const blob = _b64toBlob(imageSrc);
            localStorage.setItem('img', imageSrc);
            const fileData = new FormData();
            fileData.append('face', blob);
            const res = await CheckinServices.checkin(fileData);
            console.log(res);
            if (res === undefined) handleMessage('Score Too Slow');
            else if (res.code === 1008) {
              setCountShot(prev => prev + 1);
              handleMessage(res.status);
            } else if (res.code === 1000 && res.status.includes('Successfully') && res.person_id) {
              console.log('Running');
              count++;
              setCountShot(prev => prev + 1);
              if (count === 1) {
                history.push('/onsuccess', {
                  person_id: res.person_id,
                });
              }
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Webcam
      ref={webcamReference}
      screenshotFormat="image/jpeg"
      className={styles.webcam}
      videoConstraints={videoConstraints}
    />
  );
};

export default Camera;
