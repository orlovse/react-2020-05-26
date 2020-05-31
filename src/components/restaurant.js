import React from 'react';
import Reviews from './reviews';
import Menu from './menu';

export default function Restaurant(props) {
  const { menu, reviews } = props.restaurant;
  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
