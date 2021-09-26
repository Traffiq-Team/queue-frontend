import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
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
      setTimeout(setTimeoutRepeated, getJitteredDelay());
    }

    const getJitteredDelay = () => delay + Math.round(Math.random() * 200);

    if (delay) {
      setTimeout(setTimeoutRepeated, getJitteredDelay())
    }
  }, [delay]);
}

export default useInterval;
