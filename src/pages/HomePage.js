import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import CartSummary from '../components/CartSummary';

const HomePage = () => {
  const [searchTerm] = useState('');


  return (
    <Container>
      <Row>
        <Col md={9}>
          <ProductList searchTerm={searchTerm} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CartSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
