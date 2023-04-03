import React from 'react';
import { MovieDetails } from './MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
  movieInfo: {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/ru/4/46/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%91%D0%BE%D0%B3%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F_%D1%80%D0%B0%D0%BF%D1%81%D0%BE%D0%B4%D0%B8%D1%8F%C2%BB.jpg',
    movieName: 'bohemian rhapsody',
    releaseYear: 2018,
    relevantGenres: ['Drama', 'Biography', 'Music'],
    rating: 8.9,
    duration: '2h 34min',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  onClick: () => {},
};
