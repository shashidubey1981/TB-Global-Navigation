'use client';

import React from 'react';
import styles from './styles/TMWBurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const TMWBurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <button 
      className={styles.burgerMenu}
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className={`${styles.burgerMenu__line} ${isOpen ? styles['burgerMenu__line--open'] : ''}`}></span>
      <span className={`${styles.burgerMenu__line} ${isOpen ? styles['burgerMenu__line--open'] : ''}`}></span>
      <span className={`${styles.burgerMenu__line} ${isOpen ? styles['burgerMenu__line--open'] : ''}`}></span>
    </button>
  );
};

export default TMWBurgerMenu;
