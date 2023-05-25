import { ALL_GENRES, MOVIE_URL } from '../constants/constants';
import axios from 'axios';

export const transformResponseToMovieInfo = (data) => {
  const {
    id,
    poster_path,
    title,
    release_date,
    genres,
    vote_average,
    runtime,
    overview,
  } = data;
  return {
    id,
    imageUrl: poster_path,
    movieName: title,
    release_date,
    releaseYear: release_date?.substring(0, 4),
    relevantGenres: genres,
    rating: vote_average,
    duration: runtime,
    description: overview,
  };
};

export const getMovieInfo = async (movieId) => {
  const url = `${MOVIE_URL}/${movieId}`;
  const movie = await fetchMovies(url);
  return transformResponseToMovieInfo(movie);
};

const fetchMovies = async (url) => {
  const result = await axios.get(url);
  const { data } = result;

  return data.data ? data.data : data;
};

export const getMovieList = async ({
  sortBy = 'date',
  query = '',
  genre = ALL_GENRES,
}) => {
  let requestUrl = `${MOVIE_URL}?sortBy=${sortBy}&sortOrder=asc`;

  if (query) {
    requestUrl += `&searchBy=title&search=${query}`;
  }
  if (genre !== ALL_GENRES) {
    requestUrl += `&filter=${genre}`;
  }

  const movieData = await fetchMovies(requestUrl);
  const movieList = movieData.map((movie) =>
    transformResponseToMovieInfo(movie),
  );

  return { movieList, sortBy, genre };
};

export const getChangedSearchParams = (prevSearchParams, changedParam) => {
  const searchParams = Object.fromEntries([...prevSearchParams]);
  return { ...searchParams, ...changedParam };
};
