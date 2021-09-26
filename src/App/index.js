import React from 'react';
import Page from '../components/Page';
import Content from '../components/Content';
import Loading from '../components/Loading';
import styles from './styles.module.css';

const App = () => {
  return (
    <Page>
      <section className={styles.section}>
        <Content />
        <Loading />
      </section>
    </Page>
  );
}

export default App;
