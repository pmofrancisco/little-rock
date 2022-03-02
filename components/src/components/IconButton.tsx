import React from 'react';
import { ButtonStyles } from './Button';

type IconButtonProps = {
  label: string;
  onClick: () => void;
};

export const IconButton = ({ label, onClick }: IconButtonProps) => (
  <ButtonStyles onClick={onClick}>{label}</ButtonStyles>
);
