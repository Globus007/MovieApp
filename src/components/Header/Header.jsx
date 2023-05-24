'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();
  const { movieId } = useParams();

  const topButtonHandler = () => {
    if (movieId) {
      return router.push('/');
    }
    router.push(`/new`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>netflixroulette</div>
      <button className={styles.button} onClick={topButtonHandler}>
        {movieId ? 'Back' : '+ Add movie'}
      </button>
    </header>
  );
};
