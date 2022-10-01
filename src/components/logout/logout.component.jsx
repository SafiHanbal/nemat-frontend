import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  LogoutContainer,
  Paragraph,
  ButtonsContainer,
  CancelLogout,
  Error,
} from './logout.styles';

import Button from '../button/button.component';
import Loader from '../loader/loader.component';

import { logoutStart } from '../../store/me/me.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  selectLogoutLoading,
  selectLogoutError,
} from '../../store/me/me.selector';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectLogoutLoading);
  const error = useSelector(selectLogoutError);
  const user = useSelector(selectCurrentUser);

  const handleOnClick = () => {
    dispatch(logoutStart());
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LogoutContainer>
      <Paragraph>Are you sure you want to Logout?</Paragraph>
      <ButtonsContainer>
        <CancelLogout to="/me">Cancel</CancelLogout>
        <Button onClick={handleOnClick}>
          {isLoading ? <Loader /> : 'Log Out'}
        </Button>
      </ButtonsContainer>
      {error && <Error>{error.message}</Error>}
    </LogoutContainer>
  );
};

export default Logout;
