import React from 'react';
import styles from './MovieTitle.module.css';

export const MovieTitle = ({ movieInfo, onClick }) => {
  const { imageUrl, movieName, releaseYear, relevantGenres } = movieInfo;

  return (
    <div className={styles.div} onClick={onClick}>
      <img className={styles.img} alt={movieName} src={imageUrl} />
      <div className={styles.name}>
        <h3>{movieName}</h3>
        <span>{releaseYear}</span>
      </div>
      <span>{relevantGenres.join(', ')}</span>
    </div>
  );
};
