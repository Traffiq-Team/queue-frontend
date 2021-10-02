import React, { useEffect } from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';
import { useScenario } from '../hooks';

const App = () => {
  const { backgroundColor } = useScenario();

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <Page>
      <section className={styles.section}>
        <Content />
        <Animation />
      </section>
    </Page>
  );
}

export default App;
