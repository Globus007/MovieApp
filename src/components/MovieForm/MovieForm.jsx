import React from 'react';
import styles from './MovieForm.module.css';

export const MovieForm = ({ movieInfo = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form id="movie_form" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.div}>
        <div className={styles.left}>
          <label htmlFor="movieName">title</label>
          <input
            id="movieName"
            name="movieName"
            placeholder="Movie title"
            defaultValue={movieInfo?.movieName}
          />

          <label htmlFor="imageUrl"> movie url </label>
          <input
            id="imageUrl"
            name="imageUrl"
            placeholder="https://"
            defaultValue={movieInfo?.imageUrl}
          />

          <label htmlFor="genre">genre</label>
          <select
            id="genre"
            name="genre"
            placeholder="Slelect genre"
            defaultValue={movieInfo?.genre}
          >
            <option>{movieInfo?.genre}</option>
          </select>
        </div>

        <div className={styles.right}>
          <label htmlFor="releaseYear">release date </label>
          <input
            id="releaseYear"
            name="releaseYear"
            type="date"
            placeholder="Select Date"
            defaultValue={movieInfo?.releaseYear}
          />

          <label htmlFor="rating"> rating </label>
          <input
            id="rating"
            name="rating"
            placeholder="0.0"
            defaultValue={movieInfo?.rating}
          />

          <label htmlFor="duration">runtime </label>
          <input
            id="duration"
            name="duration"
            placeholder="minutes"
            defaultValue={movieInfo?.duration}
          />
        </div>
      </div>

      <label htmlFor="description">overview </label>
      <textarea
        id="description"
        name="description"
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
