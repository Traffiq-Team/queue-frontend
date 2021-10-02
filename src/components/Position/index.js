import React, { useState, useEffect, useContext } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import { store } from '../../store';
import { SET_ERROR, SET_LOADING, SET_REDIRECT_URL } from '../../store/actions';
import Button from '../Button';
import { useScenario } from '../../hooks';
import { scenarioTypes } from '../../common/constants';

const POLLING_DELAY = 2000;
const JITTER_DELAY = 200;

const Position = () => {
  const [positionNumber, setPositionNumber] = useState(null);
  const [clientId, setClientId] = useState(null);

  const { state, dispatch } = useContext(store);
  const { redirectUrl } = state;

  const { type: scenarioType } = useScenario();

  useEffect(() => {
    const addUserToQueue = async () => {
      dispatch({ type: SET_LOADING, payload: true });
      const [data, error] = await joinQueue();

      if (error) {
        dispatch({ type: SET_ERROR, payload: error });
      }

      if (data) {
        setPositionNumber(data.position);
        setClientId(data.clientId);
      }
    };

    addUserToQueue();
  }, [dispatch]);

  useInterval(async () => {
    if (clientId && !redirectUrl && positionNumber !== -1) {
      const [data, error] = await getQueuePosition(clientId);
      
      if (error) {
        dispatch({ type: SET_ERROR, payload: error });
      }

      if (data) {
        // BE will return the redirect url IF the user reaches the front of the queue
        if (data.redirectUrl) {
          dispatch({ type: SET_LOADING, payload: false });
          dispatch({ type: SET_REDIRECT_URL, payload: data.redirectUrl });
        } else {
          setPositionNumber(data.position);
        }
      }
    }
  }, POLLING_DELAY, { jitter: JITTER_DELAY });

  if (scenarioType === scenarioTypes.error) {
    return (
      <Button variation="primary" type="button" >
        Try again
      </Button>
    );
  }

  if (scenarioType === scenarioTypes.ready) {
    return (
      <Button variation="primary" type="link" href={redirectUrl}>
        Take me there
      </Button>
    );
  }

  if (positionNumber) {
    return <span className={styles.number}>{positionNumber}</span>;
  }

  return <Spinner />;
};

export default Position;
