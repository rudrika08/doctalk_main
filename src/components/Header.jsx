import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Navbar.Brand href="#" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>DocTalk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
          <Nav style={{ display: 'flex', gap: '20px' }}>
            <Nav.Link href="#" style={{ color: '#000', fontWeight: '500' }}>Login</Nav.Link>
            <Nav.Link href="#" style={{ color: '#000', fontWeight: '500' }}>Sign Up</Nav.Link>
            <Nav.Link href="#" style={{ color: '#000', fontWeight: '500' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
