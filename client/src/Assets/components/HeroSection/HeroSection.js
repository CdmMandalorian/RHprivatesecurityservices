import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import logo from '../../Images/RHprivatesecurityservices(2).png'


function HeroSection() {
  return (
    <>
    <Container className='hero-container'>
      <Col className='hero-container'>
      <img src={logo} className="img-fluid logo" alt="brand"/>
      </Col>
    </Container>
    </>
  );
}

export default HeroSection;