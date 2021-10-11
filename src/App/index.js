import React, { useEffect, useContext, Fragment } from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';
import { useScenario } from '../hooks';
import { store } from '../store';
import makeReadableTime from '../common/utils/makeReadableTime';

const App = () => {
  const { backgroundColor, documentTitle } = useScenario();
  const { state } = useContext(store);
  const { estimatedWaitTime } = state;

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.title = `${documentTitle} | TraffiQ`;
  }, [backgroundColor, documentTitle]);

  return (
    <Page>
      <section className={styles.section}>
        <Content />
        <Animation />
      </section>
      <span className={styles.estimatedWaitTime}>
        {estimatedWaitTime
          ? (
              <Fragment>Estimated wait time is
                {' '}
                <em>{makeReadableTime(estimatedWaitTime)}</em>
              </Fragment>
            )
          : (
              null
            )}
      </span>
    </Page>
  );
};

export default App;
