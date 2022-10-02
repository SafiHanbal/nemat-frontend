import React from 'react';

import {
  ReviewContainer,
  ReviewDescriptionContainer,
  Name,
  StarContainer,
  Star,
  ReviewText,
} from './review.styes';

import Avatar from '../avatar/avatar.component';

const Review = ({ reviewData }) => {
  const {
    user: { name, photo },
    rating,
    review,
  } = reviewData;
  return (
    <ReviewContainer>
      <Avatar image={photo} />
      <ReviewDescriptionContainer>
        <Name>{name}</Name>
        <StarContainer>
          <Star active={rating >= 1 ? 1 : 0} />
          <Star active={rating >= 2 ? 1 : 0} />
          <Star active={rating >= 3 ? 1 : 0} />
          <Star active={rating >= 4 ? 1 : 0} />
          <Star active={rating >= 5 ? 1 : 0} />
        </StarContainer>
        <ReviewText>{review}</ReviewText>
      </ReviewDescriptionContainer>
    </ReviewContainer>
  );
};

export default Review;
