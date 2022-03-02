import React from 'react';
import { IconButton } from '../components/IconButton';

export default {
  title: 'Buttons',
  component: IconButton
};

export const PrimaryIconButton = () => (
  <IconButton label='Primary Icon Button' onClick={() => alert('Primary Icon Button is clicked')} />
);
