import React, { useState, useEffect } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';

const POLLING_DELAY = 2000;
const JITTER_DELAY = 200;

const Position = () => {
  const [positionNumber, setPositionNumber] = useState(0);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const joinQueueFetch = async () => {
      const [data] = await joinQueue();

      if (data) {
        const { position, clientId: id } = data;
        setPositionNumber(position);
        setClientId(id);
      }
    };

    joinQueueFetch();
  }, []);

  useInterval(async () => {
    if (clientId) {
      const [data] = await getQueuePosition(clientId);
      
      if (data) {
        const { position } = data;
        setPositionNumber(position);
      }
    }
  }, POLLING_DELAY, { jitter: JITTER_DELAY });

  return (
    <span className={styles.number}>{positionNumber}</span>
  );
};

export default Position;
