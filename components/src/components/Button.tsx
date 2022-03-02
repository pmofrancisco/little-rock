import React from 'react';
import styled from 'styled-components';

export const ButtonStyles = styled.button`
  background-color: #00ce89;
  border: none;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 18px;
`;

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => (
  <ButtonStyles onClick={onClick}>{label}</ButtonStyles>
);
