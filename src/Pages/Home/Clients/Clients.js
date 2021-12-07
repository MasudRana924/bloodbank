import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserInjured, faUser } from '@fortawesome/free-solid-svg-icons'
import './Clients.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Clients = () => {
    const patient = <FontAwesomeIcon icon={faUserInjured} className="user-icon" />
    const donar = <FontAwesomeIcon icon={faUser} className="user-icon" />
    AOS.init({
        duration:400,
          offset: 420,
          
      })
    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <Row className="w-50 mx-auto" xs={1} md={2}>
                <Col md={6}>
                    <div className="user-card" data-aos="fade-down" data-aos-offset="420"  data-aos-duration="400">
                       
                        <span>{patient}</span>

                        <h4 className="mt-3"><b>100k</b></h4>
                        <p>Happy Patients</p>

                    </div>
                </Col>
                <Col md={6}>
                    <div className="user-card" data-aos="fade-down" >
                        <span>{donar}</span>

                        <h4 className="mt-3"><b>10k</b></h4>
                        <p>Great Donars</p>

                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Clients;