import React from 'react';
import styles from './Header.module.css';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({ onCitySelect }) => {
  return (
    <header className={styles.appHeader}>
      <h1 className={styles.title}>
        <span className={styles.cosmic}>FLIGHT</span>
        <span className={styles.dashboard}>DASHBOARD</span>
      </h1>
      <div className={styles.searchContainer}>
        <SearchForm onCitySelect={onCitySelect} />
      </div>
      <nav className={styles.nav}>
        <a href="#settings" className={styles.navLink}>Settings</a>
      </nav>
    </header>
  );
};

export default Header;