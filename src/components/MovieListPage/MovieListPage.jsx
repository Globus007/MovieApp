'use client';

import React, { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './MovieListPage.module.css';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { GENDERS } from '../../constants/constants';
import { SortControl } from '../SortControl/SortControl';
import { MovieTitle } from '../MovieTile/MovieTitle';

export const MovieListPage = ({ movieList, sortBy, genre }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onSelectGenreHandler = (genre) => {
    router.push(pathname + '?' + createQueryString('genre', genre));
  };

  const onSortingHandler = (sortCriteria) => {
    router.push(pathname + '?' + createQueryString('sortBy', sortCriteria));
  };

  const handleMovieClick = (movie) => {
    router.push(`/${movie.id}`);
  };

  return (
    <>
      <section className={styles.navigation}>
        <GenreSelect
          selected={genre}
          genders={GENDERS}
          onSelect={onSelectGenreHandler}
        />
        <SortControl currentSelection={sortBy} onChange={onSortingHandler} />
      </section>

      <section className={styles.grid}>
        {movieList?.map((movie) => (
          <MovieTitle
            key={movie.movieName}
            movieInfo={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </section>

      <footer>
        <div className={styles.logo}>netflixroulette</div>
      </footer>
    </>
  );
};
