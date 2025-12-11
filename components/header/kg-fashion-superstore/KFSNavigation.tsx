'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles/KFSHeader.module.scss';
import { MainNavigationEntry, MainNavigationItem } from '@/types/app';


interface NavigationProps {
  items?: MainNavigationEntry[];
}

const KFSNavigation: React.FC<NavigationProps> = ({ 
  items = []
}) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        {items.map((entry, entryIndex) => (
          entry.items.map((item: MainNavigationItem, itemIndex: number) => (
            <li key={`${entryIndex}-${itemIndex}`} className={styles.navigation__item}>
              {item.link ? (
                <Link href={item.link} className={styles.navigation__link}>
                  {item.text}
                </Link>
              ) : (
                <span className={styles.navigation__link}>
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

export default KFSNavigation;
