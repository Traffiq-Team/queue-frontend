import { useEffect, useRef } from 'react';

const useInterval = (callback, delay, options = {}) => {
  const { jitter } = options;
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    const setTimeoutRepeated = () => {
      tick();
      setTimeout(setTimeoutRepeated, getDelay());
    }

    const getDelay = () => jitter ? delay + Math.round(Math.random() * jitter) : delay;

    if (delay) {
      setTimeout(setTimeoutRepeated, getDelay())
    }
  }, [delay, jitter]);
}

export default useInterval;
