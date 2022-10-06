import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SpecialDealsContainer, Heading } from './special-deals.styles';

import MenuItemCardSkeleton from '../../skeleton/menu-item-card-skeleton/menu-item-card-skeleton.component';
import MenuItemCard from '../menu-item-card/menu-item-card.component';

import { fetchSpecialDealsStart } from '../../store/menu/menu.action';
import { selectSpecialDeals } from '../../store/menu/menu.selector';
import { defaultDisplayItems } from '../../utils/default-display-items/default-display-items';

const SpecialDeals = () => {
  const dispatch = useDispatch();
  const specialDeals = useSelector(selectSpecialDeals);
  const shimmer = specialDeals[0] && specialDeals[0]?.id === 1;

  useEffect(() => {
    dispatch(fetchSpecialDealsStart(defaultDisplayItems));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heading>Special Deals</Heading>
      <SpecialDealsContainer>
        {shimmer &&
          specialDeals.map(({ id }) => <MenuItemCardSkeleton key={id} />)}
        {specialDeals[0] &&
          !shimmer &&
          specialDeals.map((item) => (
            <MenuItemCard key={item._id} menuItemData={item} />
          ))}
      </SpecialDealsContainer>
    </>
  );
};

export default SpecialDeals;
