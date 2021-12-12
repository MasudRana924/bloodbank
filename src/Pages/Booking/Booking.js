import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

import useAuth from '../../Hooks/useAuth';

import './Booking.css'

const Booking = () => {
    const { user } = useAuth()
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
          
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {  
                    swal({
                        title: "Success",
                        text: "Request placed !",
                        icon: "success",
                        button: "Ok",
                    });
                    reset()

                }
            })
    };
    return (
        <Container fluid className="booking-card mt-5 mb-5">

            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6}>
                    <form className="shipping-form " onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} placeholder="your name" />

                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        {errors.email && <span className="error">This field is required</span>}
                        <input defaultValue="" {...register("group")} placeholder="which blood group you need" />
                        <input defaultValue="" {...register("phone")} placeholder="your phone number" />
                        <input defaultValue="" {...register("address")} placeholder="your present address" />
                        <input defaultValue="" {...register("city")} placeholder="your city " />

                        <input type="submit" value="Confirm Booking" className="bg-danger text-white"  />

                    </form>
                </Col>
                <Col md={3}></Col>
            </Row>



        </Container>
    );
};

export default Booking;