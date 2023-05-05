import React, { useState } from 'react';

import { SearchForm } from '../SearchForm/SearchForm';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { SortControl } from '../SortControl/SortControl';
import { MovieTitle } from '../MovieTile/MovieTitle';
import { MovieDetails } from '../MovieDetails/MovieDetails';

import styles from './MovieListPage.module.css';
import { useFetchMovies } from '../../hooks/UseFetchMovies';

export const MovieListPage = () => {
  const ALL_GENRES = 'all';
  const genders = [ALL_GENRES, 'documentary', 'comedy', 'horror', 'crime'];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date');
  const [activeGenre, setActiveGenre] = useState(ALL_GENRES);
  // const [selectedMovie, setSelectedMovie] = useState(null);

  const { movieList, isLoading, error, selectedMovie } = useFetchMovies(
    searchQuery,
    activeGenre,
    sortCriteria,
  );

  const onSearchHandler = (query) => {
    setActiveGenre(ALL_GENRES);
    setSearchQuery(query);
  };

  const onSelectGenreHandler = (genre) => {
    setSearchQuery('');
    setActiveGenre(genre);
  };

  const onSortingHandler = (sortCriteria) => {
    setSortCriteria(sortCriteria);
  };
  const topButtonHandler = () => {
    if (selectedMovie) {
      setSearchQuery('');
    }
  };

  return (
    <>
      <header>
        <div className={styles.logo}>netflixroulette</div>
        <button className={styles.button} onClick={topButtonHandler}>
          {selectedMovie ? 'Back' : '+ Add movie'}
        </button>
      </header>

      <main>
        {selectedMovie ? (
          <MovieDetails movieInfo={selectedMovie} />
        ) : (
          <>
            <h1>Find your movie</h1>
            <SearchForm initialQuery={searchQuery} onSearch={onSearchHandler} />
          </>
        )}
      </main>

      <section className={styles.navigation}>
        <GenreSelect
          selected={activeGenre}
          genders={genders}
          onSelect={onSelectGenreHandler}
        />
        <SortControl
          currentSelection={sortCriteria}
          onChange={onSortingHandler}
        />
      </section>

      {error && <div>${error}</div>}

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <section className={styles.grid}>
          {movieList?.map((movie) => (
            <MovieTitle key={movie.movieName} movieInfo={movie} />
          ))}
        </section>
      )}

      <footer>
        <div className={styles.logo}>netflixroulette</div>
      </footer>
    </>
  );
};
