import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement, remove } from '../../redux/actions';
import OrderItem from './orderItem';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';

const Order = ({ orders, increment, decrement, remove }) => {
  const total = orders.reduce(
    (acc, order) => acc + order.amount * order.product.price,
    0
  );

  const orderItem = orders.map((order) => (
    <li key={order.product.id}>
      <OrderItem product={order} increment={increment} decrement={decrement} />
      <div>
        <button onClick={() => decrement(order.product.id, order.product)}>
          <img src={MinusIcon} alt="minus" />
        </button>
        <button onClick={() => increment(order.product.id, order.product)}>
          <img src={PlusIcon} alt="plus" />
        </button>
        <button onClick={() => remove(order.product.id, order.product)}>
          X
        </button>
      </div>
    </li>
  ));

  return (
    <div>
      <ul>{orderItem}</ul>
      <div>
        <div>
          <b>total</b>
        </div>
        <div>
          <b>{total} $</b>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  orders: PropTypes.array.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = ({ order }) => ({
  orders: Object.keys(order.orders)
    .map((id) => order.orders[id])
    .filter((order) => order.amount > 0),
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
