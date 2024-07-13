import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order-success');
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <Form>
        <Form.Group controlId="shippingAddress">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="paymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
