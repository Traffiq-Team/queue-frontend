import React, { useContext } from 'react';
import styles from './styles.module.css';
import Position from '../Position';
import { useScenario } from '../../hooks';
import { store } from '../../store';

const Content = () => {
  const { description } = useScenario();
  const { state } = useContext(store);
  const { specialTitle } = state;
  const title = specialTitle || 'Waiting Queue';

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <Position />
    </section>
  );
};

export default Content;
