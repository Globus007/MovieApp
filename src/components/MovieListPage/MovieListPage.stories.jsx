import React from 'react';
import { MovieListPage } from './MovieListPage';

export default {
  title: 'MovieListPage',
  component: MovieListPage,
};

const Template = (args) => <MovieListPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
