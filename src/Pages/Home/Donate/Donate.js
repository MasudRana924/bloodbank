import React, { useRef } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Donate.css'

const Donate = () => {
    const tostify = () => {
        toast.success('Succesfully Donate ', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        });
    }
    const nameRef = useRef()
    const phoneRef = useRef()
    const groupRef = useRef()
    const divisionRef = useRef()
    const districtRef = useRef()
    const handleDonate = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const phone = phoneRef.current.value
        const group = groupRef.current.value
        const division = divisionRef.current.value
        const district = districtRef.current.value
        const donar = { name, phone, group, division, district }
        fetch('http://localhost:5000/donars', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    tostify()
                    e.target.reset()
                }
            })
           
    }
    return (
        <div id="donate">
            <Container fluid className="mt-5 pt-5">
                <Row xs={1} md={3} className="mt-3">
                    <Col md={3} className=""></Col>
                    <Col md={6} className="">
                        <div className="donate-form w-75 mx-auto ">
                            <div className=" w-75 mx-auto pb-5">
                                <p className="text-white text-center pt-3 fs-2"> Ready to Donate</p>
                                <Form onSubmit={handleDonate}>

                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Name</Form.Label>
                                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Phone</Form.Label>
                                        <Form.Control ref={phoneRef} type="number" placeholder="Enter your phone no" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Blood Group</Form.Label>
                                        <Form.Control ref={groupRef} type="text" placeholder="Enter your blood group" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">Division</Form.Label>
                                        <Form.Control ref={divisionRef} type="text" placeholder="Enter your division" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-1 text-start">
                                        <Form.Label className="text-white">District</Form.Label>
                                        <Form.Control ref={districtRef} type="text" placeholder="Enter your district" />
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