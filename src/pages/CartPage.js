import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ListGroup, Container } from 'react-bootstrap';
import { removeFromCart, updateCartItem } from '../redux/actions/cardActions';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCartItem(id, quantity));
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <h1>Cart</h1>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name} x {item.quantity} - R{item.price * item.quantity}
            <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
              min="1"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Total: R{totalCost}</h2>
      <Button href="/checkout">Proceed to Checkout</Button>
    </Container>
  );
};

export default CartPage;
