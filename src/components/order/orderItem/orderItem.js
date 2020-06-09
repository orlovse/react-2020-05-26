import React from 'react';

const OrderItem = ({ product }) => {
  const sum = product.amount * product.product.price;

  return (
    <div>
      <div>{product.product.name}</div>
      <div>{product.product.price} $</div>
      <div>{product.product.amount}</div>
      <div>{sum} $</div>
    </div>
  );
};

export default OrderItem;
