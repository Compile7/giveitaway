import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UserInfo(){
    return(

        <div className="my-4">
            <h2> Donor Details</h2>
       <Form className="my-4">
       <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Control type="email" placeholder="Enter Your Name" />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Contact number" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicAddress">
         <Form.Control type="tel" placeholder="Example" />
       </Form.Group>
       <Button variant="primary" href="/donate" type="submit">
         Submit
       </Button>
      
     </Form>
     </div>
    )
}