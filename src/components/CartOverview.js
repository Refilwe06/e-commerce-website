import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

function CartOverview() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCost);

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Cart Overview</Card.Title>
        {cartItems.map(item => (
          <Card.Text key={item.id}>
            {item.name} x {item.quantity}
          </Card.Text>
        ))}
        <Card.Text>Total: R{totalCost}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartOverview;
