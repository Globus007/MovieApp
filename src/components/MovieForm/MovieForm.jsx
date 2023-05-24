import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './MovieForm.config';
import styles from './MovieForm.module.css';
import { ALL_GENRES, GENDERS } from '../../constants/constants';

export const MovieForm = ({ movieInfo = {}, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form
      id="movie_form"
      className={styles.form}
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className={styles.div}>
        <div className={styles.left}>
          <label htmlFor="movieName">title</label>
          <input
            id="movieName"
            placeholder="Movie title"
            defaultValue={movieInfo?.movieName}
            {...register('title')}
          />
          <p className={styles.error}>{errors.title?.message}</p>

          <label htmlFor="imageUrl">movie url </label>
          <input
            id="imageUrl"
            placeholder="https://"
            defaultValue={movieInfo?.imageUrl}
            {...register('poster_path')}
          />
          <p className={styles.error}>{errors.poster_path?.message}</p>

          <label htmlFor="genre">genre</label>
          <select
            id="genre"
            placeholder="Slelect genre"
            defaultValue={movieInfo?.relevantGenres?.map((genre) =>
              genre.toLowerCase(),
            )}
            multiple
            {...register('genres')}
          >
            {GENDERS.filter((genre) => genre !== ALL_GENRES).map((genre) => (
              <option key={genre}>{genre}</option>
            ))}
          </select>
          <p className={styles.error}>{errors.genres?.message}</p>
        </div>

        <div className={styles.right}>
          <label htmlFor="releaseYear">release date</label>
          <input
            id="releaseYear"
            type="date"
            placeholder="Select Date"
            defaultValue={movieInfo?.release_date}
            {...register('release_date')}
          />
          <p className={styles.error}>{errors.release_date?.message}</p>

          <label htmlFor="rating"> rating </label>
          <input
            id="rating"
            placeholder="0.0"
            defaultValue={movieInfo?.rating}
            {...register('vote_average')}
          />
          <p className={styles.error}>{errors.vote_average?.message}</p>

          <label htmlFor="duration">runtime </label>
          <input
            id="duration"
            placeholder="minutes"
            defaultValue={movieInfo?.duration}
            {...register('runtime')}
          />
          <p className={styles.error}>{errors.runtime?.message}</p>
        </div>
      </div>

      <label htmlFor="description">overview </label>
      <textarea
        id="description"
        placeholder="Movie description"
        defaultValue={movieInfo?.description}
        {...register('overview')}
      ></textarea>
      <p className={styles.error}>{errors.overview?.message}</p>

      <div className={styles.buttons}>
        <button className={styles.reset} type="reset">
          reset
        </button>
        <button className={styles.submit} type="submit">
          submit
        </button>
      </div>
    </form>
  );
};
