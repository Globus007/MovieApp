'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './MovieActionsPopup.module.css';

export const MovieActionsPopup = ({ movieId, onClick }) => {
  const router = useRouter();
  const editMovie = () => {
    router.push(`/${movieId}/edit`);
    onClick();
  };

  return (
    <dialog className={styles.dialog}>
      <button className={styles.button} onClick={editMovie}>
        Edit
      </button>
      <button className={styles.button} onClick={onClick}>
        Delete
      </button>
    </dialog>
  );
};
