'use client';

import React from 'react';
import Image from 'next/image'
import styles from './styles/TMWLogo.module.scss';
import Link from "next/link";
import { App } from '@/types'

export default function TMWLogo(data: Partial<App.LogoConfig> = {}) {
  const { alt_text, link, logo_image, $ } = data  
  if (!logo_image?.url || !alt_text) return null;
  
  return (
      <Link href={link || "/"}>
      <div className={styles.logo}>
      <span className={styles.logo__text}>
          <Image
              src={logo_image.url}
              alt={alt_text}
              {...$?.logo_image}
              className={styles.logo__image}
              width={300}
              height={16}
              priority
          />
      </span>
    </div>
      </Link>
  );
};
