'use client';

import Link from 'next/link';
import styles from './styles/TMWFooter.module.scss';

interface SocialMediaProps {
  title?: string;
  links?: Array<{ platform: string; url: string; icon?: string }>;
}

export default function TMWSocialMedia({ title = 'Follow Us', links }: SocialMediaProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className={styles.socialMedia}>
      <h3 className={styles.socialTitle}>{title}</h3>
      <div className={styles.socialLinks}>
        {links.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
          >
            {social.icon || social.platform}
          </Link>
        ))}
      </div>
    </div>
  );
}

