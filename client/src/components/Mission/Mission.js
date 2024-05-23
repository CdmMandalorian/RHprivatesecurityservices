import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../Assets/Images/RHprivatesecurityservices.png'

function Mission() {
    return (
        <Container fluid className="mission-container">
      <Container className='mission'>
        <h1 className="mission"style={{color: 'rgba(245, 181, 27)' }}>
          MISSION
        </h1>
        <Row className='mission-description'>
          <Col style={{ color: 'white' }}>
            <h4 className="mission">Empower our clients with a sense of peace of mind by providing comprehensive and realiable security services. </h4>
            <h4 className="mission">Our Mission is to be the trusted partner for our clients, offering safety as a top priority. </h4>
            <h4 className="mission">We Believe everyone deserves to feel safe and secure. </h4>
            <h4 className='mission'>Providing professional highly trained security personnel for any environment. </h4>
            <h4 className='mission'>Driven by a Integrity, Commitment and Reliance. </h4>
            <h4 className="mission">Fostering safety and security, cultivating a vibrant community where individuals thrive, and businesses prosper. </h4>
            <h4 className="mission">Build lasting relationships with our clients by providing exceptional security services. </h4>
            <h4 className='mission'>Honoring commitment with integrity. </h4>
            <h4 className='mission'>Dedicated in upholding the highest industry standards. </h4>
            <h4 className='mission'>Ensuring swift response, with resolute action. </h4>
            <h4 className='mission'>To Observe and Report. </h4>
            <br></br>
          </Col>
        </Row>
        <Row className="mission-img">
          <Col className="mission-img"
            md={5}
          >
            <img src={logo} alt="missionLogo" className="missionImg-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Mission;