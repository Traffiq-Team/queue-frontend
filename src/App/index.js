import React, { useContext, useEffect } from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';
import { store } from '../store';
import { colors } from '../common/constants';

const App = () => {
  const { state } = useContext(store);
  const { redirectUrl } = state;

  useEffect(() => {
    if (redirectUrl) {
      document.body.style.backgroundColor = colors.LIGHT_GREEN;
    }
  }, [redirectUrl]);

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
