import React from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { GenreSelect } from '../GenreSelect/GenreSelect';
import { SortControl } from '../SortControl/SortControl';
import { MovieTitle } from '../MovieTile/MovieTitle';

import styles from './MovieListPage.module.css';
import { GENDERS } from '../../constants/constants';
import { getChangedSearchParams } from '../../utils/utils';

export const MovieListPage = () => {
  const { movieList, sortBy, genre } = useLoaderData();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectGenreHandler = (genre) => {
    const params = getChangedSearchParams(searchParams, { genre });
    setSearchParams(params);
  };

  const onSortingHandler = (sortCriteria) => {
    const params = getChangedSearchParams(searchParams, {
      sortBy: sortCriteria,
    });
    setSearchParams(params);
  };
  const topButtonHandler = () => {
    if (movieId) {
      return navigate('/');
    }
    navigate('/new');
  };
  const handleMovieClick = (movie) => {
    return navigate(`/${movie.id}`);
  };

  return (
    <>
      <header>
        <div className={styles.logo}>netflixroulette</div>
        <button className={styles.button} onClick={topButtonHandler}>
          {movieId ? 'Back' : '+ Add movie'}
        </button>
      </header>

      <main>
        <Outlet />
      </main>

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
