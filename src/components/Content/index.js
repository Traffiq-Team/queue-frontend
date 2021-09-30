import React from 'react';
import styles from './styles.module.css';
import Position from '../Position';

const Content = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Waiting Queue</h1>
        <p>Your current position in the queue is</p>
        <Position />
    </section>
  )
};

export default Content;
