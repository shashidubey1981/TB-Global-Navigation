'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles/TMWMegamenu.module.scss';
import { MainNavigationItem, MegaMenu, MegaMenuSection, FeatureCardGroup } from '@/types/app';

interface TMWMegamenuProps {
  item: MainNavigationItem | null;
  isVisible: boolean;
  headerRef?: React.RefObject<HTMLElement>;
}

const TMWMegamenu: React.FC<TMWMegamenuProps> = ({ item, isVisible, headerRef }) => {
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    if (isVisible && headerRef?.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setTopOffset(headerHeight);
    }
  }, [isVisible, headerRef]);

  if (!item || !isVisible || !item.mega_menu || item.mega_menu.length === 0) {
    return null;
  }

  // Get the first mega menu (assuming one mega menu per item)
  const megaMenu: MegaMenu = item.mega_menu[0];
  const sections: MegaMenuSection[] = megaMenu.sections || [];
  const subSections: MegaMenuSection[] = megaMenu.sub_sections || [];
  const featureCardGroups: FeatureCardGroup[] = megaMenu.feature_cards || [];

  return (
    <div 
      className={styles.megamenu} 
      data-visible={isVisible}
      style={{ top: `${topOffset}px` }}
    >
      <div className={styles.megamenu__container}>
        <div className={styles.megamenu__grid}>
          {/* First Column: Sections */}
          <div className={styles.megamenu__column}>
            <h3 className={styles.megamenu__columnTitle}>Sections</h3>
            <ul className={styles.megamenu__list}>
              {sections.map((section, index) => (
                <li key={section.uid || index} className={styles.megamenu__listItem}>
                  {section.link ? (
                    <Link href={section.link} className={styles.megamenu__link}>
                      {section.thumbnail && (
                        <img 
                          src={section.thumbnail} 
                          alt={section.label}
                          className={styles.megamenu__thumbnail}
                        />
                      )}
                      <span className={styles.megamenu__label}>{section.label}</span>
                    </Link>
                  ) : (
                    <span className={styles.megamenu__link}>
                      {section.thumbnail && (
                        <img 
                          src={section.thumbnail} 
                          alt={section.label}
                          className={styles.megamenu__thumbnail}
                        />
                      )}
                      <span className={styles.megamenu__label}>{section.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column: Sub Sections */}
          <div className={styles.megamenu__column}>
            <h3 className={styles.megamenu__columnTitle}>Sub Sections</h3>
            <ul className={styles.megamenu__list}>
              {subSections.map((subSection, index) => (
                <li key={subSection.uid || index} className={styles.megamenu__listItem}>
                  {subSection.link ? (
                    <Link href={subSection.link} className={styles.megamenu__link}>
                      {subSection.thumbnail && (
                        <img 
                          src={subSection.thumbnail} 
                          alt={subSection.label}
                          className={styles.megamenu__thumbnail}
                        />
                      )}
                      <span className={styles.megamenu__label}>{subSection.label}</span>
                    </Link>
                  ) : (
                    <span className={styles.megamenu__link}>
                      {subSection.thumbnail && (
                        <img 
                          src={subSection.thumbnail} 
                          alt={subSection.label}
                          className={styles.megamenu__thumbnail}
                        />
                      )}
                      <span className={styles.megamenu__label}>{subSection.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Feature Cards */}
          <div className={styles.megamenu__column}>
            <h3 className={styles.megamenu__columnTitle}>Featured</h3>
            <div className={styles.megamenu__featureCards}>
              {featureCardGroups.map((group, groupIndex) => (
                <div key={groupIndex} className={styles.megamenu__featureCardGroup}>
                  {group.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className={styles.megamenu__featureCard}>
                      {card.image?.url && (
                        <img 
                          src={card.image.url} 
                          alt={card.image_alt_text || card.title}
                          className={styles.megamenu__featureCardImage}
                        />
                      )}
                      <div className={styles.megamenu__featureCardContent}>
                        <h4 className={styles.megamenu__featureCardTitle}>{card.title}</h4>
                        {card.subtitle && (
                          <p className={styles.megamenu__featureCardSubtitle}>{card.subtitle}</p>
                        )}
                        {card.cta && (
                          <Link 
                            href={card.cta.cta_url} 
                            className={styles.megamenu__featureCardCTA}
                          >
                            {card.cta.text}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TMWMegamenu;
