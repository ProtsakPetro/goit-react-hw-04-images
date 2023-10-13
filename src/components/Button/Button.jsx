import React from 'react';
import { LoadMoreBtn } from './Button.styled';

const Button = ({ getMorePhoto }) => {
  return <LoadMoreBtn onClick={getMorePhoto}>LOAD MORE</LoadMoreBtn>;
};

export default Button;








