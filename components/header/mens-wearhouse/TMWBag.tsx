'use client';

import React from 'react';
import Image from 'next/image'
import styles from './styles/TMWBag.module.scss';

interface BagProps {
  count?: number;
  onClick?: () => void;
}

const TMWBag: React.FC<BagProps> = ({ count = 0, onClick }) => {
  return (
    <button 
      className={styles.bag}
      onClick={onClick}
      aria-label="Shopping Bag"
    >
      <span className={styles.bag__icon}>
        <Image src="https://image.menswearhouse.com/is/icon/mw_icon_nav_bagfull.svg" 
        alt="Shopping Bag" width={24} height={24} />
      </span>
      {count > 0 && (
        <span className={styles.bag__badge}>{count}</span>
      )}
    </button>
  );
};

export default TMWBag;
