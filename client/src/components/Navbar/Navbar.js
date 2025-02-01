import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Moon } from 'lunarphase-js';
import { Link } from "react-router-dom";

function Nbar() {
  const phaseEmoji = Moon.lunarPhaseEmoji();
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/RHprivatesecurityservices/"><h4 className='navBrand-heading'>R | H Private Security Services</h4></Navbar.Brand>
          <span className="moonPhaseEmoji">{phaseEmoji}</span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            </Nav>
            <Nav>
            <Nav.Link href="/RHprivatesecurityservices/">HOME</Nav.Link>
              <Nav.Link as={Link} to='/RHprivatesecurityservices/about'>ABOUT</Nav.Link>
              <Nav.Link as={Link} to='/RHprivatesecurityservices/mission'>MISSION</Nav.Link>
              <Nav.Link as={Link} to='/RHprivatesecurityservices/services'>SERVICES</Nav.Link>
              <Nav.Link as={Link} to='/RHprivatesecurityservices/gallery'>GALLERY</Nav.Link>
              <Nav.Link as={Link} to='/RHprivatesecurityservices/contact'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <span className="moonPhaseEmoji2">{phaseEmoji}</span>
        </Container>
      </Navbar>
    );
  }
  
  export default Nbar;