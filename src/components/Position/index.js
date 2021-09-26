import React, { useState, useEffect } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';

const BASE_POLLING_INTERVAL = 2000;

const Position = () => {
  const [positionNumber, setPositionNumber] = useState(null);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const queueJoin = async () => {
      const [data, error] = await joinQueue();
      const { position, clientId: id } = data;
      setPositionNumber(position);
      setClientId(id);
    };

    queueJoin();
  }, []);

  useInterval(async () => {
    if (clientId) {
      const [data] = await getQueuePosition(clientId);
      const { position } = data;
      setPositionNumber(position);
    }
  }, 2000);

  return (
    <span className={styles.number}>{positionNumber}</span>
  );
};

export default Position;
