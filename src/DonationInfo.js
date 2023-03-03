import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function DonationInfo() {
  return (
    <div className="my-4">
      <h2> Donation Details</h2>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select>
            <option value="single">Single</option>
            <option value="multi">Multi</option>
            <option value="date">Date</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select>
            <option value="single">Single</option>
            <option value="multi">Multi</option>
            <option value="date">Date</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="email" placeholder="Enter Your Name" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea" label="Additional Details" className="mb-3">
          <Form.Control as="textarea" placeholder="Additional Information" />
        </FloatingLabel>
        <Button variant="primary" href="/ngodetails" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}
