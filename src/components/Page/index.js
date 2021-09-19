import React from 'react';
import styles from './styles.module.css';

const Page = ({ children }) => {
  return (
    <main className={styles.page}>
      {children}
    </main>
  )
};

export default Page;