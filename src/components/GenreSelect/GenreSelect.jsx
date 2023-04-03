import React, { useState } from 'react';
import styles from './GenreSelect.module.css';

export const GenreSelect = ({ genders, selected, onSelect }) => {
  const [activeGenre, setActiveGenre] = useState(selected);

  const handleSelect = (genre) => {
    setActiveGenre(genre);
    onSelect(genre);
  };

  return (
    <ul className={styles.ul}>
      {genders.map((genre) => {
        let className = styles.li;
        if (activeGenre === genre) {
          className = [styles.li, styles.selected].join(' ');
        }

        return (
          <li
            className={className}
            key={genre}
            onClick={() => handleSelect(genre)}
          >
            {genre}
          </li>
        );
      })}
    </ul>
  );
};
