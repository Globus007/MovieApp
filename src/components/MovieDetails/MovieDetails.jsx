import React from 'react';
import styles from './MovieDetails.module.css';

export const MovieDetails = ({ movieInfo }) => {
  const {
    imageUrl,
    movieName,
    releaseYear,
    rating,
    duration,
    description,
    relevantGenres,
  } = movieInfo;

  return (
    <article className={styles.article}>
      <img className={styles.img} alt={movieName} src={imageUrl} />
      <div className={styles.textBlock}>
        <div className={styles.title}>
          <h2>{movieName}</h2>
          <span className={styles.rating}>{rating}</span>
        </div>
        <div className={styles.genre}>{relevantGenres.join(', ')}</div>
        <div className={styles.yearTime}>
          <span>{releaseYear}</span>
          <span className={styles.time}>{duration}</span>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
};
