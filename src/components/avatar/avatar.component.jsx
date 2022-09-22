import React from 'react';
import { AvatarContainer, AvatarImg } from './avatar.styles';

import DefaultAvatar from '../../assets/default.jpg';

const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImg src={DefaultAvatar} alt="User avatar" />
    </AvatarContainer>
  );
};

export default Avatar;
