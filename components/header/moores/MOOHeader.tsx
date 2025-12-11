'use client';

import React, { useState } from 'react';
import MOOPromotion from './MOOPromotion';
import MOOSearchLocator from './MOOSearchLocator';
import MOOAccount from './MOOAccount';
import MOOAccountModal from './MOOAccountModal';
import MOOWishlist from './MOOWishlist';
import MOOBag from './MOOBag';
import MOOLogo from './MOOLogo';
import MOOSearch from './MOOSearch';
import MOONavigation from './MOONavigation';
import MOOBurgerMenu from './MOOBurgerMenu';
import styles from './styles/MOOHeader.module.scss';
import { MOOHeaderData } from '@/types/app';


interface HeaderProps {
    data?: MOOHeaderData;
}

const MOOHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
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
              <MOOPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>

          {/* Row 2: Search Locator + Account/Wishlist/Bag + Locale Switcher */}
          <div className={styles.header__row} data-row="search-locator">
            <MOOSearchLocator/>
            <div className={styles.header__actions}>
              <MOOAccount label={data?.account?.label} onClick={handleAccountClick}/>
              <MOOWishlist count={0} />
              <MOOBag count={0} />
            </div>
          </div>

          {/* Row 3: Logo + Search */}
          <div className={styles.header__row} data-row="logo-search">
            <MOOLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <MOOSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <MOONavigation items={data?.main_navigation} />
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile}>
        <div className={styles.header__row} data-row="promotion">
            <MOOPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            <MOOBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)}>
              <MOONavigation items={data?.main_navigation} />
            </MOOBurgerMenu>
            <MOOSearchLocator />
            <MOOLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <div className={styles.header__actions}>
              <MOOWishlist count={0} />
              <MOOBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <MOOSearch onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <MOOAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </>
  );
};

export default MOOHeader;
