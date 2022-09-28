import React from 'react';
import { AvatarContainer, AvatarImg } from './avatar.styles';

const Avatar = ({ image, small = false }) => {
  return (
    <AvatarContainer small={small}>
      <AvatarImg src={image} alt="User avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
