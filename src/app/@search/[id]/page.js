import React from 'react';
import { getMovieInfo } from '../../../utils/utils';
import { MovieDetails } from '../../../components/MovieDetails/MovieDetails';

export default async function Page({ params: { id } }) {
  const movieInfo = await getMovieInfo(id);
  return <MovieDetails movieInfo={movieInfo} />;
}
