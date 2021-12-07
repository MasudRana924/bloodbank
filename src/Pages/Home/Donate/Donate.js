import React from 'react';
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Donate.css'

const Donate = () => {
    return (
        <div id="donate">
            <Container fluid className="mt-5 pt-5">
                <Row xs={1} md={3} className="mt-3">
                    <Col md={3} className=""></Col>
                    <Col md={6} className="">
                        <div className="donate-form w-75 mx-auto ">
                            <div className=" w-75 mx-auto pb-5">
                                <p className="text-white text-center pt-3 fs-2"> Ready to Donate</p>
                                <Form>

                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Name</Form.Label>
                                        <Form.Control  type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Phone</Form.Label>
                                        <Form.Control  type="number" placeholder="Enter your phone no" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Blood Group</Form.Label>
                                        <Form.Control  type="text" placeholder="Enter your blood group" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Division</Form.Label>
                                        <Form.Control  type="text" placeholder="Enter your division" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">District</Form.Label>
                                        <Form.Control  type="text" placeholder="Enter your district" />
                                    </Form.Group>
                                   
                                    

                                    <Button type="submit" className="w-100 text-center fs-3 mt-3" size="sm" variant="dark">
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="mt-5 pt-5"></Col>
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

export default Donate;