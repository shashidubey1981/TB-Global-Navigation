'use client';

import Link from 'next/link';
import styles from './styles/TMWPromotion.module.scss';
import { App } from '@/types'

export default function TMWPromotion(data: Partial<App.PromotionBar> = {}) {
  const { enabled, text, link, $ } = data  
  if (!enabled || !text) return null;

    const content = link ? (
        <Link href={link} className={styles.promotionLink}>
          {text}
        </Link>
      ) : (
        <span>{text}</span>
      );

      return (
        <div className={styles.promotionBar}>
            <div className={styles.promotionContent}>
                {content}
            </div>
        </div>
    );
}