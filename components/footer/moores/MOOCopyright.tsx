'use client';

import styles from './styles/MOOFooter.module.scss';

interface CopyrightProps {
  text?: string;
  year?: number;
}

export default function MOOCopyright({ text, year }: CopyrightProps) {
  const currentYear = year || new Date().getFullYear();
  let copyrightText = text || `© ${currentYear} All rights reserved.`;
  
  // Replace {year} placeholder if present
  if (text && text.includes('{year}')) {
    copyrightText = text.replace('{year}', currentYear.toString());
  }

  return (
    <div className={styles.copyright}>
      <p>{copyrightText}</p>
    </div>
  );
}

