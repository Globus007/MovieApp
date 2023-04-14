import React from 'react';
import styles from './MovieForm.module.css';

export const MovieForm = ({ movieInfo = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data); // todo fix
  };

  return (
    <form id="movie_form" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.div}>
        <div className={styles.left}>
          <label htmlFor="title">title</label>
          <input
            id="title"
            placeholder="Movie title"
            defaultValue={movieInfo?.movieName}
          />

          <label htmlFor="movie_url"> movie url </label>
          <input
            id="movie_url"
            placeholder="https://"
            defaultValue={movieInfo?.imageUrl}
          />

          <label htmlFor="genre">genre</label>
          <select
            id="genre"
            placeholder="Slelect genre"
            defaultValue={movieInfo?.genre}
          >
            <option>{movieInfo?.genre}</option>
          </select>
        </div>

        <div className={styles.right}>
          <label htmlFor="release_date">release date </label>
          <input
            id="release_date"
            type="date"
            placeholder="Select Date"
            defaultValue={movieInfo?.releaseYear}
          />

          <label htmlFor="rating"> rating </label>
          <input
            id="rating"
            placeholder="0.0"
            defaultValue={movieInfo?.rating}
          />

          <label htmlFor="runtime">runtime </label>
          <input
            id="runtime"
            placeholder="minutes"
            defaultValue={movieInfo?.duration}
          />
        </div>
      </div>

      <label htmlFor="description">overview </label>
      <textarea
        id="description"
        placeholder="Movie description"
        defaultValue={movieInfo?.description}
      ></textarea>

      <div className={styles.buttons}>
        <button type="reset">reset</button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
