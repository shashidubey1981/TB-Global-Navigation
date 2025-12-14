'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles/KFSHeader.module.scss';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KFSAccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => setMounted(true), 0);
    return () => {
      clearTimeout(timer);
      setMounted(false);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const drawerContent = isOpen ? (
    <div className={styles.accountModal__overlay} onClick={onClose}>
      <div className={styles.accountModal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.accountModal__header}>
          <h2 className={styles.accountModal__title}>
            {isSignIn ? 'Sign In' : 'Create Account'}
          </h2>
          <button 
            className={styles.accountModal__close}
            onClick={onClose}
            aria-label="Close drawer"
          >
            ×
          </button>
        </div>
        
        <div className={styles.accountModal__tabs}>
          <button
            className={`${styles.accountModal__tab} ${isSignIn ? styles['accountModal__tab--active'] : ''}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`${styles.accountModal__tab} ${!isSignIn ? styles['accountModal__tab--active'] : ''}`}
            onClick={() => setIsSignIn(false)}
          >
            Create Account
          </button>
        </div>

        <form className={styles.accountModal__form} onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
          console.log(isSignIn ? 'Sign in' : 'Create account', e);
        }}>
          {!isSignIn && (
            <div className={styles.accountModal__field}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required={!isSignIn}
              />
            </div>
          )}

          {!isSignIn && (
            <div className={styles.accountModal__field}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required={!isSignIn}
              />
            </div>
          )}

          <div className={styles.accountModal__field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className={styles.accountModal__field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          {isSignIn && (
            <div className={styles.accountModal__options}>
              <label className={styles.accountModal__checkbox}>
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" className={styles.accountModal__link}>
                Forgot password?
              </a>
            </div>
          )}

          <button type="submit" className={styles.accountModal__submit}>
            {isSignIn ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {isSignIn && (
          <div className={styles.accountModal__footer}>
            <p>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                className={styles.accountModal__linkButton}
                onClick={() => setIsSignIn(false)}
              >
                Create one
              </button>
            </p>
          </div>
        )}

        {!isSignIn && (
          <div className={styles.accountModal__footer}>
            <p>
              Already have an account?{' '}
              <button
                type="button"
                className={styles.accountModal__linkButton}
                onClick={() => setIsSignIn(true)}
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {mounted && typeof document !== 'undefined' && document.body && createPortal(drawerContent, document.body)}
    </>
  );
};

export default KFSAccountModal;
