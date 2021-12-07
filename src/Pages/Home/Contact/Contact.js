import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify';

const Contact = () => {
    const phone = <FontAwesomeIcon icon={faPhone} className="phone-icon" />
    const email = <FontAwesomeIcon icon={faEnvelope} className="phone-icon" />
    return (
        <div>
            <Container fluid className="mt-5 pt-5">
                <Row xs={1} md={3} className="mt-3">
                    <Col md={2} className=""></Col>
                    <Col md={8} className="">
                        <div className="donate-form w-75 mx-auto ">
                            <div className="w-100 contact-header">
                                <p className="text-white text-center pt-3 fs-2">Contact Us</p>
                                <p className="text-center text-white  text-start  ">{phone} +8801952254063</p>
                                <p className="text-center text-white  pb-3">{email} masud15-924@diu.edu.bd</p>
                            </div>
                            <div className=" w-75 mx-auto pb-5">

                                <Form>

                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Phone</Form.Label>
                                        <Form.Control type="number" placeholder="Enter your phone no" />
                                    </Form.Group>
                                    <Form.Group className="mb-1 text-start" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="text-white">Your Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>



                                    <Button type="submit" className="w-100 text-center fs-3 mt-3" size="sm" variant="dark">
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </Col>
                    <Col md={2} className="mt-5 pt-5"></Col>
                </Row>
            </Container>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    );
};

export default Contact;