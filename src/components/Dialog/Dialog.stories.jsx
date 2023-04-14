import React from 'react';
import { Dialog } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Dialog window',
  children: <>inside component</>,
  onClose: () => {},
};
