import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Page = ({ children }) => {
  return (
    <section className={styles.page}>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>powered by Traffiq</footer>
    </section>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
