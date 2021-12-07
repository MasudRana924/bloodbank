import React from 'react';
import { Col, Container, Form, Row ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <Row xs={1} md={3}>
                <Col md={4}></Col>
                <Col md={4}>
                    <div className="signup-card">
                        <Form className="w-75 mx-auto mt-3">
                            <Form.Group className="mb-1">
                            <p className="text-start text-white">Name </p>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-1" >
                            <p className="text-start text-white">Email </p>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-1" >
                            <p className="text-start text-white">Password </p>
                                <Form.Control type="password" placeholder="Enter a Password" />
                                <p className="text-start text-white"> Password should be more than 6 characters</p>
                                <p className="text-start text-danger"> </p>
                            </Form.Group>
                            <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                    Sign-up
                                </Button> <br />
                            <p className="text-start text-white">Already have an account ? <Link to="/login" className="text-decoration-none text-white">Log-in  </Link></p>
                            <br />
                        </Form>
                    </div>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default Signup;