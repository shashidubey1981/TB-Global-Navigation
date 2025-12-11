'use client';

import React, { useState } from 'react';
import TMWPromotion from './TMWPromotion';
import TMWSearchLocator from './TMWSearchLocator';
import TMWAccount from './TMWAccount';
import TMWAccountModal from './TMWAccountModal';
import TMWWishlist from './TMWWishlist';
import TMWBag from './TMWBag';
import TMWLogo from './TMWLogo';
import TMWSearch from './TMWSearch';
import TMWNavigation from './TMWNavigation';
import TMWBurgerMenu from './TMWBurgerMenu';
import styles from './styles/TMWHeader.module.scss';
import { TMWHeaderData } from '@/types/app';

interface HeaderProps {
  data?: TMWHeaderData;
}

const TMWHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
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
            <TMWPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>

          {/* Row 2: Search Locator + Account/Wishlist/Bag + Locale Switcher */}
          <div className={styles.header__row} data-row="search-locator">
            <TMWSearchLocator location={data?.store_locator?.label} />
            <div className={styles.header__actions}>
              <TMWAccount label={data?.account?.label} onClick={handleAccountClick}/>
              <TMWWishlist count={0} />
              <TMWBag count={0} />
            </div>
          </div>

          {/* Row 3: Logo + Search */}
          <div className={styles.header__row} data-row="logo-search">
            <TMWLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <TMWSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <TMWNavigation items={data?.main_navigation} />
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile}>
        <div className={styles.header__row} data-row="promotion">
            <TMWPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            <TMWBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)}>
              <TMWNavigation items={data?.main_navigation} />
            </TMWBurgerMenu>
            <TMWSearchLocator location={data?.store_locator?.label} />
            <TMWLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <div className={styles.header__actions}>
              <TMWWishlist count={0} />
              <TMWBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <TMWSearch onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <TMWAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </>
  );
};

export default TMWHeader;
