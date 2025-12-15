'use client';

import React from 'react';
import styles from './styles/TMWAccount.module.scss';
import Image from 'next/image'

interface AccountProps {
    onClick?: () => void;
    label?: string;
    link?: string
}

const TMWAccount: React.FC<AccountProps> = ({onClick, label, link}) => {
    return (
        <button
            className={styles.account}
            onClick={onClick}
            aria-label="Account"
        >
            <span className={styles.searchLocator__label}>{label}</span>
            <span className={styles.account__icon}>
                <Image src="https://image.menswearhouse.com/is/icon/mw_icon_nav_profile.svg" 
                alt="Account" width={24} height={24} />
            </span>
        </button>
    );
};

export default TMWAccount;
