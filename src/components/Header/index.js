import React, { useContext } from 'react';
import { store } from '../../store';
import styles from './styles.module.css';

const Header = () => {
  const { state } = useContext(store);
  console.log('state is', state);
  const { specialTitle } = state;
  const title = specialTitle || 'Waiting Queue';

  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <p>Your current position in the line is</p>
    </header>
  );
};

export default Header;
