import React from 'react';
import styles from './styles.module.css';
import Position from '../Position';

const Content = () => {
  return (
    <div>
      <h1 className={styles.title}>Waiting Queue</h1>
        <p>Your current position in the line is</p>
        <Position />
    </div>
  )
};

export default Content;
