import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid >
            <img src={banner} className="image-banner" alt="" />
        </Container>
    );
};

export default Banner;