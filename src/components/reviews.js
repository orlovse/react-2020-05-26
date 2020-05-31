import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  let sum = props.reviews.reduce((sum, review) => sum + review.rating, 0);
  let averageRating = (sum / props.reviews.length).toFixed(1);
  return (
    <div>
      <p>Average rating: {averageRating}</p>
      <p>Reviews:</p>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <h2>
            <b>{review.user}</b>
          </h2>
          <Rate rating={review.rating} />
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
