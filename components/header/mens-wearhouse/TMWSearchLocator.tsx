'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles/TMWSearchLocator.module.scss';

interface SearchLocatorProps {
  location?: string;
  onLocationClick?: () => void;
}

const TMWSearchLocator: React.FC<SearchLocatorProps> = ({ 
  location = 'Store Locator',
  onLocationClick 
}) => {
  return (
    <div className={styles.searchLocator}>
      <button 
        className={styles.searchLocator__button}
        onClick={onLocationClick}
        aria-label="Store Locator"
      >
        <span className={styles.searchLocator__icon}>
          <Image src="https://image.menswearhouse.com/is/icon/mw_icon_content_pin.svg" alt="Store Locator" width={20} height={20} />
        </span>
        <span className={styles.searchLocator__label}>{location}</span>
      </button>
    </div>
  );
};

export default TMWSearchLocator;
