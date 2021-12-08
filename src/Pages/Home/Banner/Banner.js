import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid  >
            <div className="banner-section">
            <img src={banner} className="image-banner" alt="" />
            </div>
          
        </Container>
    );
};

export default Banner;