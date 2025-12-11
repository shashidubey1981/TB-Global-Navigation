'use client';

import React, { useState } from 'react';
import styles from './styles/TMWSearch.module.scss';

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const TMWSearch: React.FC<SearchProps> = ({ 
  placeholder,
  onSearch 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.search__input}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search"
      />
      <button 
        type="submit" 
        className={styles.search__button}
        aria-label="Submit search"
      >
        <span className={styles.search__icon}>🔍</span>
      </button>
    </form>
  );
};

export default TMWSearch;
