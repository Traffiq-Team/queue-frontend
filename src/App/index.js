import React from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Animation from '../components/Animation';
import styles from './styles.module.css';

const App = () => {
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
