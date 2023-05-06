import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { MovieListPage } from './components/MovieListPage/MovieListPage';
import { SearchForm } from './components/SearchForm/SearchForm';
import { MovieDetailsWrapper } from './components/MovieDetailsWrapper/MovieDetailsWrapper';
import { getMovieInfo, getMovieList } from './utils/utils';
import { AddMovieForm } from './components/AddMovieForm/AddMovieForm';
import { EditMovieForm } from './components/EditMovieForm/EditMovieForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    loader: getMovieList,
    children: [
      {
        path: '/',
        element: <SearchForm />,
        children: [
          {
            path: '/new',
            element: <AddMovieForm />,
          },
          {
            path: '/:movieId/edit',
            element: <EditMovieForm />,
            loader: getMovieInfo,
          },
        ],
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
