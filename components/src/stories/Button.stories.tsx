import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Buttons',
  component: Button
};

export const PrimaryButton = () => (
  <Button label="Primary Button" onClick={() => alert('Icon Button is clicked')} />
);
