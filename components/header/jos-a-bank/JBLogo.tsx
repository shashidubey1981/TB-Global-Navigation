'use client';

import React from 'react';
import Image from 'next/image'
import styles from './styles/JBLogo.module.scss';
import Link from "next/link";


interface LogoProps {
    url?: string; alt?: string; link?: string
}

const JBLogo: React.FC<LogoProps> = ({url, alt, link}) => {
  return (
      <Link href="/">
      <div className={styles.logo}>
      <span className={styles.logo__text}>
          <Image
              src="https://image.menswearhouse.com/is/icon/mw_icon_logo.svg"
              alt="Landscape picture"
              width={300}
              height={16}
              priority
          />
      </span>
    </div>
      </Link>
  );
};

export default JBLogo;
