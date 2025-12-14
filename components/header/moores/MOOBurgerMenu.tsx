'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles/MOOBurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

const MOOBurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onToggle, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => setMounted(true), 0);
    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className={styles.burgerMenu__overlay} onClick={onToggle}>
      <div className={styles.burgerMenu__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;

  return (
    <>
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
      {mounted && typeof document !== 'undefined' && document.body && createPortal(modalContent, document.body)}
    </>
  );
};

export default MOOBurgerMenu;
