import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function Portfolio(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Sapien Aesthetic University</Card.Title>
              <Card.Text>
                This was a freelance project I worked on with classmates from the UW bootcamp cohort. It is a website that provides education material for people in the skin care industry.
              </Card.Text>
            <Card.Link href="#">Git Repo</Card.Link>
            <Card.Link href="#">xxx</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;