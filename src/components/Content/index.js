import React from 'react';
import styles from './styles.module.css';
import Position from '../Position';
import { useScenario } from '../../hooks';

const Content = () => {
  const { description } = useScenario();

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Waiting Queue</h1>
      <p>{description}</p>
      <Position />
    </section>
  );
};

export default Content;
