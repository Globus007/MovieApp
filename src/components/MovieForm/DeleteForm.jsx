import React from 'react';
import styles from './MovieForm.module.css';

export const DeleteForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form id="delete" onSubmit={handleSubmit}>
      <div className={styles.delete}>
        Are you sure you want to delete this movie?
      </div>
      <div className={styles.buttons}>
        <button type="submit">confirm</button>
      </div>
    </form>
  );
};
