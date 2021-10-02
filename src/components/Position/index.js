import React, { useState, useEffect, useContext, useCallback } from 'react';
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

  const addUserToQueue = useCallback(async () => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_ERROR, payload: null });

    try {
      const { data } = await joinQueue();

      setPositionNumber(data.position);
      setClientId(data.clientId);
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  }, [dispatch])

  const handleRetry = () => {
    addUserToQueue();
  }

  useEffect(() => {
    addUserToQueue();
  }, [addUserToQueue]);

  useInterval(async () => {
    if (clientId && !redirectUrl && positionNumber !== -1) {
      try {
        const { data } = await getQueuePosition(clientId);

        if (data.redirectUrl) {
          dispatch({ type: SET_REDIRECT_URL, payload: data.redirectUrl });
        } else {
          setPositionNumber(data.position);
        }
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
      } finally {
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  }, POLLING_DELAY, { jitter: JITTER_DELAY });

  if (scenarioType === scenarioTypes.error) {
    return (
      <Button variation="primary" type="button" onClick={handleRetry}>
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
