import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { MovieListPage } from './components/MovieListPage/MovieListPage';
import { SearchForm } from './components/SearchForm/SearchForm';
import { MovieDetailsWrapper } from './components/MovieDetailsWrapper/MovieDetailsWrapper';
import { getMovieInfo, getMovieList } from './utils/utils';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    loader: getMovieList,
    children: [
      {
        path: '/',
        element: (
          <>
            <h1>Find your movie</h1>
            <SearchForm />
          </>
        ),
      },
      {
        path: '/:movieId',
        element: <MovieDetailsWrapper />,
        loader: getMovieInfo,
        errorElement: <div>Error loading movie</div>,
      },
    ],
  },
]);
