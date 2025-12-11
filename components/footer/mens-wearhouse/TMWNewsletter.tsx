'use client';

import { useState } from 'react';
import styles from './styles/TMWFooter.module.scss';

interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function TMWNewsletter({
  title = 'Subscribe to our newsletter',
  description = 'Get the latest updates on new products and upcoming sales',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
}: NewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className={styles.newsletter}>
      <h3 className={styles.newsletterTitle}>{title}</h3>
      {description && (
        <p className={styles.newsletterDescription}>{description}</p>
      )}
      <form onSubmit={handleSubmit} className={styles.newsletterForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className={styles.newsletterInput}
          required
        />
        <button type="submit" className={styles.newsletterButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}

