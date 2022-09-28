import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReviewsContianer } from './menu-item.styles';
import { selectIsMenuItemLoading } from '../../store/menu/menu.selector';

import MenuItemHeader from '../../components/menu-item-header/menu-item-header.componet';
import Review from '../../components/review/review.component';

import { fetchMenuItemStart } from '../../store/menu/menu.action';
import MenuItemSkeleton from '../../skeleton/menu-item-skeleton/menu-item-skeleton.component';

const MenuItem = () => {
  const { menuItem } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsMenuItemLoading);

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
          {/* <ReviewsContianer>
            <Review />
          </ReviewsContianer> */}
        </>
      )}
    </>
  );
};

export default MenuItem;
