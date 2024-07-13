import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { addToCart } from '../redux/actions/cardActions';
import '../App.css';


const products = [
    { id: 1, name: 'Girl T-Shirt', price: 100, description: 'Description for girl t-shirt', imageUrl: '/images/shirt.jpeg' },
    { id: 2, name: 'Shoes', price: 200, description: 'Description of shoes', imageUrl: '/images/shoes.jpeg' },
    { id: 3, name: 'Pants', price: 150, description: 'Description of pants', imageUrl: '/images/pants.jpeg' },
];

function ProductList({ searchTerm }) {
  const dispatch = useDispatch();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Row>
      {filteredProducts.map(product => (
        <Col key={product.id} md={4}>
          <Card className="mb-3">
            <Card.Img variant="top" src={product.imageUrl} alt={product.name} className="product-img" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
