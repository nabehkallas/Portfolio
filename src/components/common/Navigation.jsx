import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-container">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="nav-brand">
          NABEH KALLAS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/" end activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume" activeClassName="active">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" activeClassName="active">
              Projects
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;