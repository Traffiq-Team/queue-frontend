import React, { useContext } from 'react';
import styles from './styles.module.css';
import Position from '../Position';
import { store } from '../../store';

const Content = () => {
  const { state } = useContext(store);
  const { redirectUrl } = state;
  const descriptionText = redirectUrl
    ? 'Your site is ready to be visited'
    : 'Your current position in the queue is';

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Waiting Queue</h1>
        <p>{descriptionText}</p>
        <Position />
    </section>
  )
};

export default Content;
