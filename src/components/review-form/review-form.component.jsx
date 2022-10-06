import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ReviewFormContainer,
  DescriptionContainer,
  StarContainer,
  Star,
  Form,
  TextArea,
  Error,
} from './review-form.styles';

import Loader from '../loader/loader.component';
import Avatar from '../avatar/avatar.component';
import Button from '../button/button.component';

import { postReviewStart } from '../../store/menu/menu.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  selectCurrentMenuItem,
  selectPostingReview,
  selectPostReviewError,
} from '../../store/menu/menu.selector';

const defaultFormFields = {
  rating: '',
  review: '',
};

const ReviewForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectPostingReview);
  const menuItem = useSelector(selectCurrentMenuItem);
  const error = useSelector(selectPostReviewError);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { rating, review } = formFields;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(postReviewStart({ menuItemId: menuItem.id, review: formFields }));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnClick = (event) => {
    setFormFields({
      ...formFields,
      rating: event.target.closest('svg').dataset.star,
    });
  };

  return (
    <ReviewFormContainer>
      <Avatar image={user.photo} />
      <DescriptionContainer>
        <StarContainer>
          <Star
            active={rating >= 1 ? 1 : 0}
            data-star="1"
            onClick={handleOnClick}
          />
          <Star
            active={rating >= 2 ? 1 : 0}
            data-star="2"
            onClick={handleOnClick}
          />
          <Star
            active={rating >= 3 ? 1 : 0}
            data-star="3"
            onClick={handleOnClick}
          />
          <Star
            active={rating >= 4 ? 1 : 0}
            data-star="4"
            onClick={handleOnClick}
          />
          <Star
            active={rating >= 5 ? 1 : 0}
            data-star="5"
            onClick={handleOnClick}
          />
        </StarContainer>
        <Form onSubmit={handleOnSubmit}>
          <TextArea
            name="review"
            rows="3"
            placeholder="Write your review here..."
            value={review}
            onChange={handleOnChange}
          />
          <Button>{isLoading ? <Loader /> : 'Post Review'}</Button>
        </Form>
        {error && <Error>{error.message}</Error>}
      </DescriptionContainer>
    </ReviewFormContainer>
  );
};

export default ReviewForm;
