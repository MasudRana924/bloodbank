import React from 'react';
import { Col } from 'react-bootstrap';
import './Donar.css'

const Donar = (props) => {
    const {name,group,phone,division,district}=props.donar
    return (
        <Col className="mt-3">
            <div className="donar-card">
                <h3 className="mt-3">{name}</h3>
                <p className="text-start ms-3">Blood Group : {group}</p>
                <p className="text-start ms-3">Phone : {phone}</p>
                <p className="text-start ms-3">District : {district}</p>
                <p className="text-start ms-3">Division : {division}</p>
               
            </div>
        </Col>
    );
};

export default Donar;