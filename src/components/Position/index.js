import React, { useState, useEffect, useContext } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import { store } from '../../store';
import { SET_REDIRECT_URL } from '../../store/actions';

const POLLING_DELAY = 2000;
const JITTER_DELAY = 200;

const Position = () => {
  const [positionNumber, setPositionNumber] = useState(null);
  const [clientId, setClientId] = useState(null);

  const { state, dispatch } = useContext(store);
  const { redirectUrl } = state;

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
          dispatch({ type: SET_REDIRECT_URL, payload: data.redirectUrl });
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
