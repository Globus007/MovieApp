import { useEffect, useState } from 'react';
import axios from 'axios';
import { transformResponseToMovieInfo } from '../utils/utils';

const MOVIE_URL = 'http://localhost:4000/movies';
const ALL_GENRES = 'all';
export const useFetchMovies = (searchQuery, activeGenre, sortCriteria) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  return { movieList, isLoading, error, selectedMovie };
};
