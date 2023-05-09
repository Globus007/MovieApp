import React, { useState } from 'react';
import styles from './MovieTitle.module.css';
import { MovieActionsPopup } from '../MovieActionsPopup/MovieActionsPopup';

export const MovieTitle = ({ movieInfo, onClick }) => {
  const { imageUrl, movieName, releaseYear, relevantGenres, id } = movieInfo;
  const [showPopup, setShowPopup] = useState(false);

  const onClickHandler = () => {
    setShowPopup((prev) => !prev);
  };

  const hideModal = () => {
    setShowPopup(false);
  };

  return (
    <article className={styles.article} onMouseLeave={hideModal}>
      <button type="button" className={styles.menuBtn} onClick={onClickHandler}>
        <span>&#8942;</span>
      </button>
      <div className={styles.content} onClick={onClick}>
        <img className={styles.img} alt={movieName} src={imageUrl} />
        <div className={styles.name}>
          <h3>{movieName}</h3>
          <span>{releaseYear}</span>
        </div>
        <span>{relevantGenres.join(', ')}</span>
      </div>
      {showPopup && <MovieActionsPopup movieId={id} onClick={hideModal} />}
    </article>
  );
};
