import React from 'react';

import { Input, Label, InputContainer } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <Input {...otherProps} />
      <Label htmlFor={otherProps.id} shrink={otherProps.value ? true : false}>
        {label}
      </Label>
    </InputContainer>
  );
};

export default FormInput;
