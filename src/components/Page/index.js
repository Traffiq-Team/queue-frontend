import React from 'react';
import styles from './styles.module.css';

const Page = ({ children }) => {
  return (
    <section className={styles.page}>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>powered by TraffiQ</footer>
    </section>
  )
};

export default Page;