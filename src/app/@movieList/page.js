import React from 'react';
import { MovieListPage } from '../../components/MovieListPage/MovieListPage';
import { getMovieList } from '../../utils/utils';

export default async function Home({ searchParams }) {
  const { movieList, sortBy, genre } = await getMovieList(searchParams);

  return <MovieListPage movieList={movieList} sortBy={sortBy} genre={genre} />;
}
