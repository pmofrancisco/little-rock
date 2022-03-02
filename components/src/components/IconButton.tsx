import React from 'react';
import { Button } from './Button';

type IconButtonProps = {
  label: string;
  onClick: () => void;
};

export const IconButton = ({ label, onClick }: IconButtonProps) => {
  return (<Button onClick={onClick}>{label}</Button>)
};
