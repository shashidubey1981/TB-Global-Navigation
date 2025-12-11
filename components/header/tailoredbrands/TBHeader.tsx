'use client';

import React, { useState } from 'react';
import TBPromotion from './TBPromotion';
import TBSearchLocator from './TBSearchLocator';
import TBAccount from './TBAccount';
import TBAccountModal from './TBAccountModal';
import TBWishlist from './TBWishlist';
import TBBag from './TBBag';
import TBLogo from './TBLogo';
import TBSearch from './TBSearch';
import TBNavigation from './TBNavigation';
import TBBurgerMenu from './TBBurgerMenu';
import styles from './styles/TBHeader.module.scss';
import { TBHeaderData } from '@/types/app';

interface HeaderProps {
    data?: TBHeaderData;
}

const TBHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
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
            <TBPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>

          {/* Row 2: Search Locator + Account/Wishlist/Bag + Locale Switcher */}
          <div className={styles.header__row} data-row="search-locator">
            <TBSearchLocator/>
            <div className={styles.header__actions}>
              <TBAccount label={data?.account?.label} onClick={handleAccountClick}/>
              <TBWishlist count={0} />
              <TBBag count={0} />
            </div>
          </div>

          {/* Row 3: Logo + Search */}
          <div className={styles.header__row} data-row="logo-search">
            <TBLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <TBSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <TBNavigation items={data?.main_navigation} />
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile}>
        <div className={styles.header__row} data-row="promotion">
            <TBPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            < TBBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)}>
              <TBNavigation items={data?.main_navigation} />
            </TBBurgerMenu>
            <TBSearchLocator />
            <TBLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <div className={styles.header__actions}>
              <TBWishlist count={0} />
              <TBBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <TBSearch onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <TBAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </>
  );
};

export default TBHeader;
