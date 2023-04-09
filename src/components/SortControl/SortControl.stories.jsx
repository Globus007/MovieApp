import React from 'react';
import { SortControl } from './SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});

Default.args = {
  currentSelection: 'date',
  onChange: () => {},
};
