import React from 'react';
import { GenreSelect } from './GenreSelect';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  genders: ['all', 'documentary', 'comedy', 'horror', 'crime'],
  selected: 'documentary',
  onSelect: () => {},
};
