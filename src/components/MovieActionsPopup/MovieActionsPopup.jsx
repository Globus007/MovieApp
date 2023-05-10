import React from 'react';
import styles from './MovieActionsPopup.module.css';
import { useNavigate } from 'react-router-dom';

export const MovieActionsPopup = ({ movieId, onClick }) => {
  const navigate = useNavigate();

  const editMovie = () => {
    navigate(`/${movieId}/edit`);
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
