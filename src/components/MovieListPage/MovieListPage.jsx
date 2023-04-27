import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { SearchForm } from '../SearchForm/SearchForm';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { SortControl } from '../SortControl/SortControl';
import { MovieTitle } from '../MovieTile/MovieTitle';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { transformResponseToMovieInfo } from '../../utils/utils';

import styles from './MovieListPage.module.css';

export const MovieListPage = () => {
  const MOVIE_URL = 'http://localhost:4000/movies';
  const ALL_GENRES = 'all';
  const genders = [ALL_GENRES, 'documentary', 'comedy', 'horror', 'crime'];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date');
  const [activeGenre, setActiveGenre] = useState(ALL_GENRES);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieList = async () => {
      setError(null);
      setIsLoading(true);

      let url = `${MOVIE_URL}?sortBy=${sortCriteria}&sortOrder=asc`;

      if (searchQuery) {
        url += `&searchBy=title&search=${searchQuery}`;
      }
      if (activeGenre !== ALL_GENRES) {
        url += `&searchBy=genres&filter=${activeGenre}`;
      }

      try {
        const result = await axios.get(url);
        const movieList = result.data.data?.map((movie) =>
          transformResponseToMovieInfo(movie),
        );
        if (movieList.length === 1) {
          setSelectedMovie(movieList[0]);
        } else {
          setMovieList(movieList);
        }
      } catch (e) {
        setError(e?.message);
      }
      setIsLoading(false);
    };

    fetchMovieList();
  }, [activeGenre, searchQuery, sortCriteria]);

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
      setSelectedMovie(null);
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
