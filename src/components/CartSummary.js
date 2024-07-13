import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const CartSummary = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h4>Cart Summary</h4>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name} x {item.quantity} - R{item.price * item.quantity}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h5>Total: R{totalCost}</h5>
    </div>
  );
};

export default CartSummary;
