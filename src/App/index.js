import React, { useEffect, useContext } from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';
import { useScenario } from '../hooks';
import { store } from '../store';

const App = () => {
  const { backgroundColor, documentTitle } = useScenario();
  const { state } = useContext(store);
  const { estimatedWaitTime } = state;

  const waitTimeMessage = estimatedWaitTime ? `Estimated wait time is ${estimatedWaitTime * 0.001} seconds` : null;

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
      <em className={styles.estimatedWaitTime}>{waitTimeMessage}</em>
    </Page>
  );
};

export default App;
