import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Dialog } from '../Dialog/Dialog';
import { MovieForm } from '../MovieForm/MovieForm';
import { MOVIE_URL } from '../../constants/constants';

export const AddMovieForm = () => {
  const navigate = useNavigate();
  const onCloseHandler = () => navigate('/');

  const addMovie = async (data) => {
    try {
      const response = await axios.post(MOVIE_URL, data);
      const {
        data: { id },
      } = response;
      navigate(`/${id}`);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <Dialog title="Add movie" onClose={onCloseHandler}>
      <MovieForm onSubmit={addMovie} />
    </Dialog>
  );
};
