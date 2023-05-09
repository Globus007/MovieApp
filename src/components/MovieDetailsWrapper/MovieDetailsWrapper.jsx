import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';

export const MovieDetailsWrapper = () => {
  const movieInfo = useLoaderData();
  return <MovieDetails movieInfo={movieInfo} />;
};
