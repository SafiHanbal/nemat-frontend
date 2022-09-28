import React from 'react';

import {
  ReviewContainer,
  ReviewDescriptionContainer,
  Name,
  Date,
  ReviewText,
} from './review.styes';

import AvatarImage from '../../assets/zaad-choudhury.jpg';
import Avatar from '../avatar/avatar.component';

const Review = () => {
  return (
    <ReviewContainer>
      <Avatar image={AvatarImage} />
      <ReviewDescriptionContainer>
        <Name>Vimala Issac</Name>
        <Date>Yesterday</Date>
        <ReviewText>
          Decent place. The service was good for the most part but the waiter
          was a bit air-headed. The ambiance gives off an earthy feel-good vibe.
          The food was cooked to perfection. 4 stars of quality.
        </ReviewText>
      </ReviewDescriptionContainer>
    </ReviewContainer>
  );
};

export default Review;
