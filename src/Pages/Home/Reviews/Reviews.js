import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Spinner } from 'react-bootstrap';

import './Reviews.css'
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    let Rsettings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <Container fluid className="mt-5 pt-5 pb-5">

            <div className="container ">
               

                {
                    reviews.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                    </div> :
                        <Slider {...Rsettings}>

                            {
                                reviews.map(review => (

                                    <div className="out" >
                                        <div className="card-review">
                                            <img src={review.img} className="review-image" alt="" />
                                            <Rating
                                                initialRating={review.rating}
                                                emptySymbol="far fa-star rating"
                                                fullSymbol="fas fa-star rating"
                                                readonly ></Rating>

                                            <h5 className="card-title">{review.name}</h5>



                                        </div>
                                    </div>

                                ))
                            }



                        </Slider>
                }

            </div>

        </Container>
    );
};

export default Reviews;