'use client';

import React, { useState } from 'react';
import JBPromotion from './JBPromotion';
import JBSearchLocator from './JBSearchLocator';
import JBAccount from './JBAccount';
import JBAccountModal from './JBAccountModal';
import JBWishlist from './JBWishlist';
import JBBag from './JBBag';
import JBLogo from './JBLogo';
import JBSearch from './JBSearch';
import JBNavigation from './JBNavigation';
import JBBurgerMenu from './JBBurgerMenu';
import styles from './styles/JBHeader.module.scss';
import { JBHeaderData } from '@/types/app';


interface HeaderProps {
    data?: JBHeaderData;
}

const JBHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleAccountClick = () => {
    setIsAccountModalOpen(true);
  };


  return (
    <>
      <header className={styles.header}>
        {/* Desktop View - 4 Rows */}
        <div className={styles.header__desktop}>
          {/* Row 1: Promotion */}
          <div className={styles.header__row} data-row="promotion">
            <JBPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>

          {/* Row 2: Search Locator + Account/Wishlist/Bag + Locale Switcher */}
          <div className={styles.header__row} data-row="search-locator">
            <JBSearchLocator/>
            <div className={styles.header__actions}>
              <JBAccount label={data?.account?.label} onClick={handleAccountClick}/>
              <JBWishlist count={0} />
              <JBBag count={0} />
            </div>
          </div>

          {/* Row 3: Logo + Search */}
          <div className={styles.header__row} data-row="logo-search">
            <JBLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <JBSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <JBNavigation items={data?.main_navigation} />
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile}>
        <div className={styles.header__row} data-row="promotion">
            <JBPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            <JBBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)}>
              <JBNavigation items={data?.main_navigation} />
            </JBBurgerMenu>
            <JBSearchLocator />
            <JBLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <div className={styles.header__actions}>
              <JBWishlist count={0} />
              <JBBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <JBSearch onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <JBAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </>
  );
};

export default JBHeader;
