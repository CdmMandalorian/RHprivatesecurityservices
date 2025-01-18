import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import building from '../../Assets/Images/buildingImg.jpg'
import logo from '../../Assets/Images/RHprivatesecurityservices.png'

import NOSsal from "../../Assets/Images/NOSsal.jpg"
import RanchoECA from "../../Assets/Images/RanchoECA.jpg"

function Gallery() {

    return (
        <Container fluid className="gallery-container">
            <Container className='gallery'>
                <h1 className="gallery" style={{ color: 'rgba(245, 181, 27)' }}>
                    GALLERY 
                </h1>
                <Row className='gallery-description'>
                    <Col style={{ color: 'white' }}>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={building}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='carouselCaption'> Onsite Security Personnel </h5>
                                    <p className='carouselCaption'> Offices, Buildings, Churches </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={NOSsal}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='carouselCaption'> Private Event Banquets </h5>
                                    <p className='carouselCaption'> Quinceñeras, Birthdays, Weddings </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={RanchoECA}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='carouselCaption'> Large Event Gatherings </h5>
                                    <p className='carouselCaption'> Festivals, Conventions, Cookouts </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <br></br>
                    </Col>
                </Row>
                <Row className="gallery-img">
                    <Col className="gallery-img"
                        md={5}
                    >
                        <img src={logo} alt="galleryLogo" className="galleryImg-fluid" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Gallery;