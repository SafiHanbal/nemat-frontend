import React from 'react';
import { AvatarContainer, AvatarImg } from './avatar.styles';

import DefaultAvatar from '../../assets/default.jpg';

const Avatar = ({ image, small = false }) => {
  return (
    <AvatarContainer small={small}>
      <AvatarImg src={image || DefaultAvatar} alt="User avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
