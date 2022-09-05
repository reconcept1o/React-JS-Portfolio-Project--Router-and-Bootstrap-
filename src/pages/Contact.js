import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";


const Contact = () => {
  const [setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
             <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary">Send</Button>{' '}
    </Form>
          </div>
        </Col>

        <Col>
          <div className="contact-data">
            <p>
             If you are seriously interested in any project, you can contact this e-mail address.
            </p>
            <p className="mail">
             reconceptx@gmail.com
            </p>
            <p>
             we are all over the world.......
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
           
                  <a href="https://www.freelancer.com/u/reconcept1x">Freelancer</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://github.com/reconcept1o">
                    Github
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://twitter.com/outlanderXo">Twitter</a>
                </ListGroup.Item>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;

