import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h1>Welcome to Math Magicians!</h1>
    <p>Math Magicians is a website that helps you perform mathematical</p>
    <p>calculations and provides interesting mathematical quotes.</p>
    <p>Navigate to the Calculator page to perform calculations or</p>
    <p>to the Quote page to view a random math-related quote.</p>
  </div>
);

export default Home;
