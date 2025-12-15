'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/TMWMobileNavigation.module.scss';
import { MainNavigationEntry, MainNavigationItem, MegaMenuSection } from '@/types/app';

interface TMWMobileNavigationProps {
  items?: MainNavigationEntry[];
  isMenuOpen?: boolean;
}

type ViewState = 'main' | 'expanded';

const TMWMobileNavigation: React.FC<TMWMobileNavigationProps> = ({ 
  items = [],
  isMenuOpen = false
}) => {
  const [viewState, setViewState] = useState<ViewState>('main');
  const [expandedItem, setExpandedItem] = useState<MainNavigationItem | null>(null);

  // Reset navigation state when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setViewState('main');
      setExpandedItem(null);
    }
  }, [isMenuOpen]);

  const handleExpandClick = (item: MainNavigationItem, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (item.mega_menu && item.mega_menu.length > 0) {
      setExpandedItem(item);
      setViewState('expanded');
    }
  };

  const handleBackClick = () => {
    setViewState('main');
    setExpandedItem(null);
  };

  const allItems: MainNavigationItem[] = items.flatMap(entry => entry.items);
  const megaMenu = expandedItem?.mega_menu?.[0];
  const sections: MegaMenuSection[] = megaMenu?.sections || [];
  const subSections: MegaMenuSection[] = megaMenu?.sub_sections || [];

  if (viewState === 'expanded' && expandedItem) {
    return (
      <div className={styles.mobileNav}>
        <button 
          className={styles.mobileNav__backButton}
          onClick={handleBackClick}
          aria-label="Back to main menu"
        >
          ← Back
        </button>
        <h2 className={styles.mobileNav__title}>{expandedItem.text}</h2>
        
        {/* Sections */}
        {sections.length > 0 && (
          <div className={styles.mobileNav__section}>
            <h3 className={styles.mobileNav__sectionTitle}>Sections</h3>
            <ul className={styles.mobileNav__list}>
              {sections.map((section, index) => (
                <li key={section.uid || index} className={styles.mobileNav__listItem}>
                  {section.link ? (
                    <Link href={section.link} className={styles.mobileNav__link}>
                      {section.thumbnail && (
                        <img 
                          src={section.thumbnail} 
                          alt={section.label}
                          className={styles.mobileNav__thumbnail}
                        />
                      )}
                      <span>{section.label}</span>
                    </Link>
                  ) : (
                    <span className={styles.mobileNav__link}>
                      {section.thumbnail && (
                        <img 
                          src={section.thumbnail} 
                          alt={section.label}
                          className={styles.mobileNav__thumbnail}
                        />
                      )}
                      <span>{section.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sub Sections */}
        {subSections.length > 0 && (
          <div className={styles.mobileNav__section}>
            <h3 className={styles.mobileNav__sectionTitle}>Sub Sections</h3>
            <ul className={styles.mobileNav__list}>
              {subSections.map((subSection, index) => (
                <li key={subSection.uid || index} className={styles.mobileNav__listItem}>
                  {subSection.link ? (
                    <Link href={subSection.link} className={styles.mobileNav__link}>
                      {subSection.thumbnail && (
                        <img 
                          src={subSection.thumbnail} 
                          alt={subSection.label}
                          className={styles.mobileNav__thumbnail}
                        />
                      )}
                      <span>{subSection.label}</span>
                    </Link>
                  ) : (
                    <span className={styles.mobileNav__link}>
                      {subSection.thumbnail && (
                        <img 
                          src={subSection.thumbnail} 
                          alt={subSection.label}
                          className={styles.mobileNav__thumbnail}
                        />
                      )}
                      <span>{subSection.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <nav className={styles.mobileNav}>
      <ul className={styles.mobileNav__list}>
        {allItems.map((item, index) => (
          <li key={item.uid || index} className={styles.mobileNav__listItem}>
            <div className={styles.mobileNav__itemWrapper}>
              {item.link ? (
                <Link href={item.link} className={styles.mobileNav__link}>
                  {item.text}
                </Link>
              ) : (
                <span className={styles.mobileNav__link}>
                  {item.text}
                </span>
              )}
              {item.mega_menu && item.mega_menu.length > 0 && (
                <button
                  className={styles.mobileNav__expandButton}
                  onClick={(e) => handleExpandClick(item, e)}
                  aria-label={`Expand ${item.text}`}
                >
                  &gt;
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TMWMobileNavigation;
