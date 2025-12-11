'use client';

import React from 'react';
import styles from './styles/JBWishlist.module.scss';

interface WishlistProps {
  count?: number;
  onClick?: () => void;
}

const JBWishlist: React.FC<WishlistProps> = ({ count = 0, onClick }) => {
  return (
    <button 
      className={styles.wishlist}
      onClick={onClick}
      aria-label="Wishlist"
    >
      <span className={styles.wishlist__icon}>♡</span>
      {count > 0 && (
        <span className={styles.wishlist__badge}>{count}</span>
      )}
    </button>
  );
};

export default JBWishlist;
