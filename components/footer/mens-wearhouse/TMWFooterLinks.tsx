'use client';

import Link from 'next/link';
import styles from './styles/TMWFooter.module.scss';

interface FooterLinksProps {
  columns: Array<{
    title: string;
    items: Array<{ label: string; link: string }>;
  }>;
}

export default function TMWFooterLinks({ columns }: FooterLinksProps) {
  return (
    <div className={styles.footerLinks}>
      {columns.map((column, index) => (
        <div key={index} className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>{column.title}</h3>
          <ul className={styles.columnList}>
            {column.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link href={item.link} className={styles.columnLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

