import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UserOrderContainer } from './user-orders.styles';

import UserOrderCardSkeleton from '../../skeleton/user-order-card-skeleton/user-order-card-skeleton.component';
import UserOrderCard from '../user-order-card/user-order-card.component';

import {
  getUserOrderStart,
  setOrderConfirmed,
  setCartItems,
} from '../../store/cart/cart.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  selectUserOrders,
  selectUserOrdersLoading,
  selectOrderConfirmed,
} from '../../store/cart/cart.selector';

const UserOrders = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const userOrders = useSelector(selectUserOrders);
  const isLoading = useSelector(selectUserOrdersLoading);
  const orderedConfirmed = useSelector(selectOrderConfirmed);

  useEffect(() => {
    if (!userOrders.length && user) {
      dispatch(getUserOrderStart(user.id));
    }
    if (orderedConfirmed && user) {
      dispatch(getUserOrderStart(user.id));
      dispatch(
        setCartItems({
          cartItems: [],
          cartCount: 0,
          cartTotal: 0,
        })
      );
      dispatch(setOrderConfirmed(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedConfirmed, user, userOrders.length]);

  return (
    <UserOrderContainer>
      {isLoading && (
        <>
          <UserOrderCardSkeleton />
          <UserOrderCardSkeleton />
          <UserOrderCardSkeleton />
        </>
      )}
      {!isLoading &&
        userOrders.map((order) => (
          <UserOrderCard key={order._id} orderData={order} />
        ))}
    </UserOrderContainer>
  );
};

export default UserOrders;
