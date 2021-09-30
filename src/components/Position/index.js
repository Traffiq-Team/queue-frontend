import React, { useState, useEffect } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';
import Spinner from '../Spinner';

const POLLING_DELAY = 2000;
const JITTER_DELAY = 200;

const Position = () => {
  const [positionNumber, setPositionNumber] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    const joinQueueFetch = async () => {
      const [data] = await joinQueue();

      if (data) {
        setPositionNumber(data.position);
        setClientId(data.clientId);
      }
    };

    joinQueueFetch();
  }, []);

  useInterval(async () => {
    if (clientId && !redirectUrl && positionNumber !== -1) {
      const [data] = await getQueuePosition(clientId);
      
      if (data) {
        // BE will return the redirect url IF the user reaches the front of the queue
        if (data.redirectUrl) {
          // window.location.replace(redirectUrl);
          setRedirectUrl(data.redirectUrl);
          document.body.style.backgroundColor = 'lightgreen';
        } else {
          setPositionNumber(data.position);
        }
      }
    }
  }, POLLING_DELAY, { jitter: JITTER_DELAY });

  if (redirectUrl) {
    return <a href={redirectUrl} className={styles.buttonLink}>Take me there</a>;
  }

  if (positionNumber) {
    return <span className={styles.number}>{positionNumber}</span>;
  }

  return <Spinner />;
};

export default Position;
