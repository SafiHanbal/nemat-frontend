import React from 'react';

import { ButtonEl } from './button.styles';

const Button = ({ children, ...otherProps }) => {
  return <ButtonEl {...otherProps}>{children}</ButtonEl>;
};

export default Button;
