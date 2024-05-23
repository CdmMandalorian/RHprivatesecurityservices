import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// (function() {
//     const moonContainer = document.getElementById('moonContainer');
//     const moonPhases = ['🌕', '🌔', '🌓', '🌒', '🌑', '🌑', '🌘', '🌗', '🌖', '🌕'];
//     for (let index = 0; index < moonPhases.length; index++) {
//         const moon = moonPhases[index];
//         // for each moon, create a div with class phase and id moonPhase
//         const moonDiv = document.createElement('div');
//         moonDiv.setAttribute('class', 'phase');
//         moonDiv.setAttribute('id', 'moonPhase'+index);
//         // save that div to a const and put it in the moonContainer
//         const moonContent = moonContainer.appendChild(moonDiv);
//         // display each moon on the DOM
//         moonContent.innerHTML = moon;
//         moonContent.style.opacity = '0';
//         let lastMoonIndex = index - 1;
//         if(index-1 < 0) {
//             lastMoonIndex = moonPhases.length - 1;
//         }
//         setTimeout(function() {
//             const lastMoon = document.getElementById('moonPhase'+lastMoonIndex);
//             lastMoon.style.opacity = '0';
//             moonContent.style.opacity = '1';
//             setInterval(function() {
//                 moonContent.style.opacity = '1';
//                 lastMoon.style.opacity = '0';
//             }, moonPhases.length*200);
//         }, 200*index);
//     }
// })()
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
          <div class="moonContainer" id="moonContainer"></div>
        </Container>
      </Navbar>
    );
  }
  
  export default Nbar;