import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';

export const Dialog = ({ title, children, onClose }) => {
  return (
    <>
      {createPortal(
        <div className={styles.dialog}>
          <button
            aria-label="close"
            className={styles.close}
            onClick={onClose}
          />
          <div>
            <h2 className={styles.title}>{title}</h2>
            {children}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
