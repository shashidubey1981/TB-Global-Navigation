'use client';

import React from 'react';
import styles from './styles/JBAccount.module.scss';

interface AccountProps {
    onClick?: () => void;
    label?: string;
    link?: string
}

const JBAccount: React.FC<AccountProps> = ({onClick, label, link}) => {
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

export default JBAccount;
