'use client';

import React from 'react';
import styles from './styles/MOOBag.module.scss';

interface BagProps {
  count?: number;
  onClick?: () => void;
}

const MOOBag: React.FC<BagProps> = ({ count = 0, onClick }) => {
  return (
    <button 
      className={styles.bag}
      onClick={onClick}
      aria-label="Shopping Bag"
    >
      <span className={styles.bag__icon}>🛍️</span>
      {count > 0 && (
        <span className={styles.bag__badge}>{count}</span>
      )}
    </button>
  );
};

export default MOOBag;
