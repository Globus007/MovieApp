import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { Dialog } from '../Dialog/Dialog';
import { MovieForm } from '../MovieForm/MovieForm';
import { DATE_FORMAT, MOVIE_URL } from '../../constants/constants';

export const EditMovieForm = () => {
  const navigate = useNavigate();
  const onCloseHandler = () => navigate('/');
  const movieInfo = useLoaderData();
  console.log(movieInfo);

  const editMovie = async (data) => {
    try {
      data.release_date = moment(data.release_date).format(DATE_FORMAT);
      const response = await axios.put(MOVIE_URL, {
        ...data,
        id: movieInfo.id,
      });
      const {
        data: { id },
      } = response;
      navigate(`/${id}`);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <Dialog title="Edit movie" onClose={onCloseHandler}>
      <MovieForm onSubmit={editMovie} movieInfo={movieInfo} />
    </Dialog>
  );
};
