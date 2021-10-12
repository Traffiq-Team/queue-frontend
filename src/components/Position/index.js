import React, { useState, useEffect, useContext, useCallback } from 'react';
import joinQueue from '../../api/joinQueue';
import getQueuePosition from '../../api/getQueuePosition';
import useInterval from '../../hooks/useInterval';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import { store } from '../../store';
import { SET_ERROR, SET_ESTIMATED_WAIT_TIME, SET_LOADING, SET_REDIRECT_URL } from '../../store/actions';
import { useScenario } from '../../hooks';
import { scenarioTypes } from '../../common/constants';
import PrimaryButton from '../PrimaryButton';

const POLLING_DELAY = 500;
const JITTER_DELAY = 200;

const Position = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [autoRedirect, setAutoRedirect] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [startPosition, setStartPosition] = useState(null);

  const { state, dispatch } = useContext(store);
  const { redirectUrl } = state;

  const { scenarioType } = useScenario();

  const addUserToQueue = useCallback(async() => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_ERROR, payload: null });

    try {
      const { data } = await joinQueue();

      setCurrentPosition(data.position);
      setStartPosition(data.position);

      const time = new Date();
      setStartTime(time);
      setCurrentTime(time);

      setClientId(data.clientId);
      dispatch({ type: SET_ERROR, payload: null });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  }, [dispatch]);

  useEffect(() => {
    addUserToQueue();
  }, [addUserToQueue]);

  useInterval(async() => {
    if (clientId && !redirectUrl && currentPosition !== -1) {
      try {
        const { data } = await getQueuePosition(clientId);

        if (data.redirectUrl) {
          dispatch({ type: SET_REDIRECT_URL, payload: data.redirectUrl });

          if (!document.hidden) {
            setAutoRedirect(true);
            window.location.replace(data.redirectUrl);
          }
        } else {
          setCurrentPosition(data.position);
          setCurrentTime(new Date());
          dispatch({ type: SET_ERROR, payload: null });
        }
      } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
        setCurrentPosition(null);
      } finally {
        dispatch({ type: SET_LOADING, payload: false });
      }
    }
  }, POLLING_DELAY, { jitter: JITTER_DELAY });

  const handleRedirectClick = (e) => {
    e.preventDefault();
    window.location.href = redirectUrl;
  };

  useEffect(() => {
    const dequeueRate = (currentTime - startTime) / (startPosition - currentPosition);
    const estimatedTime = dequeueRate * currentPosition;

    dispatch({ type: SET_ESTIMATED_WAIT_TIME, payload: estimatedTime });
  }, [startTime, currentTime, startPosition, currentPosition]);

  if (!autoRedirect && scenarioType === scenarioTypes.ready) {
    return (
      <PrimaryButton onClick={handleRedirectClick} size="large">Take me there</PrimaryButton>
    );
  }

  if (currentPosition) {
    return <span className={styles.number}>{currentPosition}</span>;
  }

  return <Spinner />;
};

export default Position;
