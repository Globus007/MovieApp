import React from 'react';
import { MovieTitle } from './MovieTitle';

export default {
  title: 'MovieTitle',
  component: MovieTitle,
};

const Template = (args) => <MovieTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  movieInfo: {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/ru/4/46/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg',
    movieName: 'bohemian rhapsody',
    releaseYear: 2018,
    relevantGenres: ['Drama', 'Biography', 'Music'],
  },
  onClick: () => {},
};
