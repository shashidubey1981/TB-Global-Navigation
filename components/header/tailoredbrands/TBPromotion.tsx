'use client';

import Link from 'next/link';
import styles from './styles/TBPromotion.module.scss';

interface PromotionProps {
    enabled?: boolean;
    text?: string;
    link?: string;
}

export default function TBPromotion({ enabled = true, text, link }: PromotionProps) {
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