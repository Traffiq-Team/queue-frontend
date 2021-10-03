import { useState, useEffect } from 'react';

const useTabActive = () => {
  const [tabActive, setTabActive] = useState(!document.hidden);

  const onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      setTabActive(true);
    } else {
      setTabActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [tabActive]);

  return tabActive;
};

export default useTabActive;
