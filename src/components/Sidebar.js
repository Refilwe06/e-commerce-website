
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  const menuItems = ['Home', 'Products', 'Cart', 'Checkout'];

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        {menuItems.map((item, index) => (
          <Nav.Link key={index} href={`/${item.toLowerCase()}`}>
            {item}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
