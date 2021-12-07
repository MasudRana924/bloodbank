import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Donars.css'

const Donars = () => {
    return (
        <Container fluid className="pb-5">
            <Row md={2}>
                <Col md={3}>
                    <div className="district-section">
                        <div className="district-container">
                            <h3 className="text-center" sticky="top">District</h3>
                        </div>
                        <div className="d-flex w-75 mx-auto">
                            <div>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="dhaka" label="Dhaka" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="mymensingh" label="Mymensingh" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Chittagong" label="Chittagong" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="barisal" label="Barisal" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="sylhet" label="Sylhet" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="rangpur" label="Rangpur" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="khulna" label="Khulna" />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="rajshahi" label="Rajshahi" />
                                </Form.Group>
                            </div>
                            <div>
                            <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="a+" label="A+"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="a-" label="A-"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="b+" label="B+"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="b-" label="B-"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="ab+" label="AB+"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="ab-" label="AB-"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="o+" label="O+"  className="me-5 "/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-50 mx-auto" >
                            <Form.Check type="checkbox" value="o-" label="O-"  className="me-5 "/>
                        </Form.Group>
                            </div>
                        </div>



                    </div>


                </Col>
                <Col md={9}></Col>
            </Row>
        </Container>
    );
};

export default Donars;