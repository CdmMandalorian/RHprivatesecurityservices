import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MoonPhase } from 'moonphases-react';

function Nbar() {
  
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><h4 className='navBrand-heading'>R & H Private Security Services</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            </Nav>
            <Nav>
            <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/mission">MISSION</Nav.Link>
              <Nav.Link href="/services">SERVICES</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <MoonPhase />
        </Container>
      </Navbar>
    );
  }
  
  export default Nbar;