import React from 'react';

import {
  Description,
  Greetings,
  HeaderComp,
  Heading1,
  Name,
} from './header.styles';

const Header = () => {
  return (
    <HeaderComp>
      <div>
        <Heading1>
          <Greetings>Welcome To</Greetings>
          <Name>Nemat Restaurant</Name>
        </Heading1>
        <Description>
          Nemat pushes the envelope of Mughlai cuisine. Taking its influences
          from our team members' culinary roots, Nemat blends traditional and
          innovative techniques to create unique offerings using local
          ingredients in all of its dishes. Nemat is grounded in hospitality
          with our staff's commitment to providing you with a memorable
          experience each time you order from our store.
        </Description>
      </div>
    </HeaderComp>
  );
};

export default Header;
