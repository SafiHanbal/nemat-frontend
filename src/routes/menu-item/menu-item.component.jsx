import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReviewsContianer, EmptyData } from './menu-item.styles';

import MenuItemHeader from '../../components/menu-item-header/menu-item-header.componet';
import ReviewForm from '../../components/review-form/review-form.component';
import Review from '../../components/review/review.component';
import MenuItemSkeleton from '../../skeleton/menu-item-skeleton/menu-item-skeleton.component';

import { fetchMenuItemStart } from '../../store/menu/menu.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  selectIsMenuItemLoading,
  selectCurrentMenuItem,
} from '../../store/menu/menu.selector';

const MenuItem = () => {
  const { menuItem } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsMenuItemLoading);
  const user = useSelector(selectCurrentUser);
  const menuItemData = useSelector(selectCurrentMenuItem);

  useEffect(() => {
    dispatch(fetchMenuItemStart(menuItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuItem]);

  return (
    <>
      {isLoading && <MenuItemSkeleton />}
      {!isLoading && (
        <>
          <MenuItemHeader />
          <ReviewsContianer>
            {user ? (
              <ReviewForm />
            ) : (
              <EmptyData>Login to post review.</EmptyData>
            )}
            {menuItemData?.reviews?.length ? (
              menuItemData.reviews.map((review) => (
                <Review key={review.id} reviewData={review} />
              ))
            ) : (
              <EmptyData>This Item do not have any review.</EmptyData>
            )}
          </ReviewsContianer>
        </>
      )}
    </>
  );
};

export default MenuItem;
