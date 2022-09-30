import React from 'react';

import { UserSettingsContainer } from './user-settings.styles';

import UpdateMe from '../update-me/update-me.component';
import UpdatePassword from '../update-password/update-password.component';

const UserSettings = () => {
  return (
    <UserSettingsContainer>
      <UpdateMe />
      <UpdatePassword />
    </UserSettingsContainer>
  );
};

export default UserSettings;
