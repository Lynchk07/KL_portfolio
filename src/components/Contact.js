import React from 'react'
import Form from 'react-bootstrap/Form';
// import './style.css';

function Contact() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Name (first and last)" />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Label>Message</Form.Label>
        <Form.Control type="Message" placeholder="Enter message or questions" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    </Form>
    </>

  );
}

export default Contact;

