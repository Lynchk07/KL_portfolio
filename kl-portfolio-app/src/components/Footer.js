import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

const styles ={
  footer: {
    textDecoration: 'none',
    background: 'dark',
    color: 'white'
  }
}

function Footer() {
  return (
    <Row className="justify-content-md-center">
            <Col md={{ span: 2 }}>
            <a href="https://github.com/Lynchk07">Kristin Lynch GitHub</a>
            <br></br>
            </Col>
            <Col md={{ span: 2 }}>
            <a href="https://www.linkedin.com/in/kristin-lynch-0a9b275b/">LinkedIn</a>
            </Col>
            <Col md={{ span: 2 }}>
            {/* <a>Contact info{{form}}</a> */}
            </Col>
        </Row>
  );
}

export default Footer;
