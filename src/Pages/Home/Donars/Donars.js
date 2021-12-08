import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Donar from '../Donar/Donar';
import './Donars.css'

const Donars = () => {
    const { donars, displayDonars, setDisplayDonars } = useAuth()
    const handleDhaka= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleMym= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleCTG= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleBS= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleRS= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleRP= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleKL= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleSLY= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleApositive= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleAnegative= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleBpositive= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleBnegative= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleABpositive= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleABnegative= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleOpositive= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleOnegative= e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    return (
        <Container fluid className="pb-5">
            <Row md={2}>
                <Col md={3} className="mt-3">
                    <div className="district-section">
                        <div className="district-container">
                            <h3 className="text-center" sticky="top">District</h3>
                        </div>
                        <div className="d-flex w-75 mx-auto">
                            <div>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="dhaka" label="Dhaka" onChange={handleDhaka}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Mymensingh" label="Mymensingh" onChange={handleMym}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Chittagong" label="Chittagong" onChange={handleCTG}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Barisal" label="Barisal" onChange={handleBS}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Sylhet" label="Sylhet" onChange={handleSLY} />
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Rangpur" label="Rangpur" onChange={handleRP}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Khulna" label="Khulna" onChange={handleKL}/>
                                </Form.Group>
                                <Form.Group className="mb-3 " >
                                    <Form.Check type="checkbox" value="Rajshahi" label="Rajshahi" onChange={handleRS}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="a+" label="A+" className="me-5 "onChange={handleApositive} />
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="A-" label="A-" className="me-5 " onChange={handleAnegative}/>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="B+" label="B+" className="me-5 " onChange={handleBpositive} />
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="B-" label="B-" className="me-5 " onChange={handleBnegative} />
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="AB+" label="AB+" className="me-5 " onChange={handleABpositive}/>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="AB-" label="AB-" className="me-5 " onChange={handleABnegative}/>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="O+" label="O+" className="me-5 " onChange={handleOpositive}/>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 mx-auto" >
                                    <Form.Check type="checkbox" value="O-" label="O-" className="me-5 " onChange={handleOnegative}/>
                                </Form.Group>
                            </div>
                        </div>



                    </div>


                </Col>
                <Col md={9} className="mt-3">
                    <div className="donars-section">
                    <div className="district-container">
                            <h3 className="text-center" sticky="top">Available Blood Groups</h3>
                        </div>


                        <Row xs={1} md={3}>
                            {
                                displayDonars.map(donar => <Donar
                                    donar={donar}
                                ></Donar>)
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Donars;