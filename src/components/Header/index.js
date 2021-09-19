import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>Waiting Queue</h1>
      <p>Your current position in the line is</p>
    </header>
  );
};

export default Header;
