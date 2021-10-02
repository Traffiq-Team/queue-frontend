import React, { useContext, useEffect } from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';
import { store } from '../store';
import { colors } from '../common/constants';

const App = () => {
  const { state } = useContext(store);
  const { redirectUrl, error } = state;

  useEffect(() => {
    let backgroundColor = colors.WHITE;

    if (redirectUrl) {
      backgroundColor = colors.LIGHT_GREEN;
    } else if (error) {
      backgroundColor = colors.LIGHT_RED;
    }

    document.body.style.backgroundColor = backgroundColor;
  }, [redirectUrl, error]);

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
