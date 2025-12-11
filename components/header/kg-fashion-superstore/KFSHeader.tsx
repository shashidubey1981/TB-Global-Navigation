'use client';

import React, { useState } from 'react';
import KFSPromotion from './KFSPromotion';
import KFSSearchLocator from './KFSSearchLocator';
import KFSAccount from './KFSAccount';
import KFSAccountModal from './KFSAccountModal';
import KFSWishlist from './KFSWishlist';
import KFSBag from './KFSBag';
import KFSLogo from './KFSLogo';
import KFSSearch from './KFSSearch';
import KFSNavigation from './KFSNavigation';
import KFSBurgerMenu from './KFSBurgerMenu';
import styles from './styles/KFSHeader.module.scss';
import { KFSHeaderData } from '@/types/app';


interface HeaderProps {
    data?: KFSHeaderData;
}

const KFSHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
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
            <KFSPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>

          {/* Row 2: Search Locator + Account/Wishlist/Bag + Locale Switcher */}
          <div className={styles.header__row} data-row="search-locator">
            <KFSSearchLocator/>
            <div className={styles.header__actions}>
              <KFSAccount label={data?.account?.label} onClick={handleAccountClick}/>
              <KFSWishlist count={0} />
              <KFSBag count={0} />
            </div>
          </div>

          {/* Row 3: Logo + Search */}
          <div className={styles.header__row} data-row="logo-search">
            <KFSLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <KFSSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <KFSNavigation items={data?.main_navigation} />
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile}>
        <div className={styles.header__row} data-row="promotion">
            <KFSPromotion enabled={data?.promotion_bar?.enabled}
                       text={data?.promotion_bar?.text}
                       link={data?.promotion_bar?.link} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            <KFSBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)}>
              <KFSNavigation items={data?.main_navigation} />
            </KFSBurgerMenu>
            <KFSSearchLocator />
            <KFSLogo url={data?.logo?.link} alt={data?.logo?.alt_text} link={data?.logo?.link} />
            <div className={styles.header__actions}>
              <KFSWishlist count={0} />
              <KFSBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <KFSSearch onSearch={handleSearch} />
          </div>
        </div>
      </header>
      <KFSAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </>
  );
};

export default KFSHeader;
