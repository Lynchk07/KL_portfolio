import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
      <Link >Kristin Lynch</Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Contact">contact</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Portfolio">portfolio</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/Resume">resume</Link></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
