import React from 'react'
import Form from 'react-bootstrap/Form';
// import './style.css';

function Contact() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Message</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    </Form>
    </>
  );
}

export default Contact;

