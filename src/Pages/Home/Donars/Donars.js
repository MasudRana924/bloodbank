import React from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBurn,faFirstAid } from '@fortawesome/free-solid-svg-icons'
import Donar from '../Donar/Donar';
import './Donars.css'

const Donars = () => {
    const { donars, displayDonars, setDisplayDonars } = useAuth()
    const search = <FontAwesomeIcon icon={faSearch} className="burn-icon" />
    const burn = <FontAwesomeIcon icon={faBurn} className="burn-icon" />
    const faid = <FontAwesomeIcon icon={faFirstAid} className="burn-icon" />
    const handleSearch = e => {
        const city = e.target.value
        const matchedCity = donars.filter(h => h.division.toLowerCase().includes(city.toLowerCase()));
        setDisplayDonars(matchedCity)
    }
    const handleBloodSearch = e => {
        const blood = e.target.value
        const matchedCity = donars.filter(h => h.group.toLowerCase().includes(blood.toLowerCase()));
        setDisplayDonars(matchedCity)
    }

    return (
        <Container fluid className="mt-5 pb-5">
            <div className="w-75 mx-auto">
                <Row xs={1} md={3}>
                    <Col md={4}>
                        <div className="search-div">
                            <div className="mt-3 search-container w-25 mx-auto">
                                <p className="">{search}</p>
                            </div>
                            <div className="mt-3">
                                <h4 >Find A Location </h4>
                                <input type="text" className="input-find" onChange={handleSearch} placeholder="search" />
                            </div>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="search-div">
                            <div className="mt-3 search-container w-25 mx-auto">
                                <p className="">{burn}</p>
                            </div>
                            <div className="mt-3">
                                <h4 >Find Blood  </h4>
                                <input type="text" className="input-find" onChange={handleBloodSearch} placeholder="search (A+)" />
                                <div className="mt-1">
                                    <button className="blood-btn" >A+</button>
                                    <button className="blood-btn">A-</button>
                                    <button className="blood-btn">B+</button>
                                    <button className="blood-btn">B-</button>
                                </div>
                                <div className="mt-1">
                                    <button className="blood-btn">AB+</button>
                                    <button className="blood-btn">AB-</button>
                                    <button className="blood-btn">O+</button>
                                    <button className="blood-btn">O-</button>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="search-div">
                            <div className="mt-3 search-container w-25 mx-auto">
                                <p className="">{faid}</p>
                            </div>
                            <div className="mt-3">
                                <h4 >Request</h4>
                                 <Button size="sm" variant="danger">Emergency</Button>
                                 <p>---OR---</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className="mt-5" >

                <div className=" w-75 mx-auto donars-section">
                    <div className="district-container">
                        <h3 className="text-center" sticky="top">Available Blood Groups</h3>
                    </div>
                    <Row xs={1} md={3} className="ps-1 pe-1">

                        {
                            displayDonars.map(donar => <Donar
                                donar={donar}
                            ></Donar>)
                        }
                    </Row>
                </div>
            </div>

        </Container>
    );
};

export default Donars;