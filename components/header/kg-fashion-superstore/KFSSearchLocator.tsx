'use client';

import React from 'react';
import styles from './styles/KFSHeader.module.scss';

interface SearchLocatorProps {
  location?: string;
  onLocationClick?: () => void;
}

const KFSSearchLocator: React.FC<SearchLocatorProps> = ({ 
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
        <span className={styles.searchLocator__icon}>📍</span>
        <span className={styles.searchLocator__label}>{location}</span>
      </button>
    </div>
  );
};

export default KFSSearchLocator;
