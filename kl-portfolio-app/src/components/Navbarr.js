import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/portfolio">WHATEVR YOU WANT</Link>
      <Container>
        <Navbar.Brand
        //  className = {homePage} 
         href="#home">Kristin Lynch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">HOME</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact">CONTACT</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Portfolio">PORTFOLIO</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Resume">RESUME</Link></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
