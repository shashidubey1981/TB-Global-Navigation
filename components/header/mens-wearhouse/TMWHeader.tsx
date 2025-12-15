'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import TMWMegamenu from './TMWMegamenu';
import TMWMobileNavigation from './TMWMobileNavigation';
import styles from './styles/TMWHeader.module.scss';
import { TMWHeaderData, MainNavigationItem } from '@/types/app';

interface HeaderProps {
  data?: TMWHeaderData;
}

const TMWHeader: React.FC<HeaderProps> = ({ data }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeMegamenuItem, setActiveMegamenuItem] = useState<MainNavigationItem | null>(null);
  const [headerMobileHeight, setHeaderMobileHeight] = useState(0);
  const navigationWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  const handleAccountClick = () => {
    setIsAccountModalOpen(true);
  };

  const handleMegamenuItemClick = (item: MainNavigationItem | null) => {
    setActiveMegamenuItem(item);
  };

  // Close megamenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navigationWrapperRef.current &&
        !navigationWrapperRef.current.contains(event.target as Node) &&
        activeMegamenuItem
      ) {
        setActiveMegamenuItem(null);
      }
    };

    if (activeMegamenuItem) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMegamenuItem]);

  // Calculate mobile header height for positioning burger menu
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (mobileHeaderRef.current) {
        setHeaderMobileHeight(mobileHeaderRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Lock body scroll when burger menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);


  return (
    <>
      <header className={styles.header} ref={headerRef}>
        {/* Desktop View - 4 Rows */}
        <div className={styles.header__desktop}>
          {/* Row 1: Promotion */}
          <div className={styles.header__row} data-row="promotion">
            <TMWPromotion {...data?.promotion_bar} />
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
            <TMWLogo {...data?.logo} />
            <TMWSearch onSearch={handleSearch} placeholder={data?.search?.placeholder} />
          </div>

          {/* Row 4: Navigation */}
          <div className={styles.header__row} data-row="navigation">
            <div className={styles.header__navigationWrapper} ref={navigationWrapperRef}>
              <TMWNavigation 
                items={data?.main_navigation} 
                onItemClick={handleMegamenuItemClick}
                activeItem={activeMegamenuItem}
              />
            </div>
          </div>
        </div>

        {/* Mobile View - 3 Rows */}
        <div className={styles.header__mobile} ref={mobileHeaderRef}>
        <div className={styles.header__row} data-row="promotion">
          <TMWPromotion {...data?.promotion_bar} />
          </div>
          {/* Row 1: Burger + Locator + Logo + Wishlist + Bag */}
          <div className={styles.header__row} data-row="mobile-top">
            <TMWBurgerMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
            <TMWSearchLocator location={data?.store_locator?.label} />
            <TMWLogo {...data?.logo} />
            <div className={styles.header__actions}>
              <TMWWishlist count={0} />
              <TMWBag count={0} />
            </div>
          </div>

          {/* Row 2: Search */}
          <div className={styles.header__row} data-row="mobile-search">
            <TMWSearch onSearch={handleSearch} />
          </div>

          {/* Burger Menu Content */}
          {isMenuOpen && (
            <div 
              className={styles.header__burgerMenuContent}
              style={{ 
                top: `${headerMobileHeight}px`,
                height: `calc(100vh - ${headerMobileHeight}px)`
              }}
            >
              <TMWMobileNavigation items={data?.main_navigation} isMenuOpen={isMenuOpen} />
            </div>
          )}
        </div>
      </header>
      <TMWAccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
      <TMWMegamenu 
        item={activeMegamenuItem} 
        isVisible={!!activeMegamenuItem}
        headerRef={headerRef}
      />
    </>
  );
};

export default TMWHeader;
