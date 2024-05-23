import React from "react";
import '../../style.css'
import { Container, Row, Col } from "react-bootstrap";
import Link from '@mui/material/Link';
import Flag from '../../Assets/Images/USAflag.png';
import footerImg from '../../Assets/Images/RHprivatesecurityservices.png'


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer">
      <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.twitter.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.whatsapp.com/"
                style={{ color: "white" }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
        <Link color="inherit" href="/"
        className="corp">
        R H Private Security Services <img src={footerImg} alt='footerlogo' height='40px' width='40px'/>  
      </Link>{' '}{' © '} 
      {new Date().getFullYear()} 
       {' AEG CODES Production.'} All Rights Reserved.®
        </Col>
        <Col md="4" className="footer-flagImg">
              <img src={Flag} alt='footerlogo' height='20px' width='44px'/>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
