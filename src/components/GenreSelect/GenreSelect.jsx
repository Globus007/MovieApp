import React from 'react';
import styles from './GenreSelect.module.css';

export const GenreSelect = ({ genders, selected, onSelect }) => {
  return (
    <ul className={styles.ul}>
      {genders.map((gender) => {
        let className = styles.li;
        if (selected === gender) {
          className = [styles.li, styles.selected].join(' ');
        }

        return (
          <li
            className={className}
            key={gender}
            onClick={() => onSelect(gender)}
          >
            {gender}
          </li>
        );
      })}
    </ul>
  );
};
