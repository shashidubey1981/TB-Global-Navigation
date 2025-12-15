'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles/TMWNavigation.module.scss';
import { MainNavigationEntry, MainNavigationItem } from '@/types/app';


interface NavigationProps {
  items?: MainNavigationEntry[];
  onItemClick?: (item: MainNavigationItem | null) => void;
  activeItem?: MainNavigationItem | null;
}

const TMWNavigation: React.FC<NavigationProps> = ({ 
  items = [],
  onItemClick,
  activeItem
}) => {
  const handleItemClick = (item: MainNavigationItem, event: React.MouseEvent) => {
    // If item has mega_menu, prevent default link behavior and show megamenu
    if (item.mega_menu && item.mega_menu.length > 0) {
      event.preventDefault();
      // Toggle: if clicking the same item, close it; otherwise open the clicked item
      if (activeItem === item) {
        onItemClick?.(null);
      } else {
        onItemClick?.(item);
      }
    } else {
      // If no mega_menu, close any open megamenu
      onItemClick?.(null);
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {items.map((entry, entryIndex) => (
          entry.items.map((item: MainNavigationItem, itemIndex: number) => (
            <li 
              key={`${entryIndex}-${itemIndex}`} 
              className={styles.navigation__item}
            >
              {item.link ? (
                <Link 
                  href={item.link} 
                  className={`${styles.navigation__link} ${activeItem === item ? styles.navigation__linkActive : ''}`}
                  onClick={(e) => handleItemClick(item, e)}
                >
                  {item.text}
                </Link>
              ) : (
                <span 
                  className={`${styles.navigation__link} ${activeItem === item ? styles.navigation__linkActive : ''}`}
                  onClick={(e) => handleItemClick(item, e)}
                >
                  {item.text}
                </span>
              )}
            </li>
          ))
        )).flat()}
      </ul>
    </nav>
  );
};


export default TMWNavigation;
