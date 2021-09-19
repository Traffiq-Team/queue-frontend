import React from 'react';
import Page from './components/Page';
import Header from './components/Header';
import Position from './components/Position';
import Loading from './components/Loading';
import styles from './styles.module.css';

const App = () => {
  return (
    <Page>
      <section className={styles.section}>
        <Header />
        <Position />
        <Loading />
      </section>
    </Page>
  );
}

export default App;
