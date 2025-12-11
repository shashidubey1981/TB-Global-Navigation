'use client';

import React from 'react';
import styles from './styles/TMWAccount.module.scss';

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
            <span className={styles.account__icon}>👤</span>
        </button>
    );
};

export default TMWAccount;
