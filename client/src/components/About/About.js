import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';
import { faBuildingLock } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
import { faShopLock } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <Container fluid className="about-container">
      <Container className='about'>
        <h1 className="about" style={{color: 'rgba(245, 181, 27)' }}>
          ABOUT
        </h1>
        <Row className='about-description' style={{color: 'white' }}>
          <Col >
            <h3 className="about">R | H</h3>
            <h4 className="about">Private Security Services</h4>
            <h5 className="about">R | H Private Security Services is a Private Sercurity Firm that Specializes Protecting Your Environment.</h5>
            <h5 className="about">Connecting with our Team, Developing a Comprehensive Plan Matching Your Exact Organizations' Security Aspirations.</h5>
            <h5 className="about">Founded 2015 in Los Angeles, within the Community.</h5>
            <h5 className='about'>Earning Trust, Displaying Integrity, Committed to Safety as a Priority.</h5>
            <h5 className='about'>Whether the Level of Security is High or Low We Offer Premier Security Service.</h5>
            <br className="aboutBR"></br>
            <h4 className="about">24 / 7 Premier Support</h4>
            <h5 className="about">Dedicated in Fundamental Philoshophies, Maintaining a Dynamic Workforce.</h5>
            <h5 className="about">Unparalleled Commitment to Achieve Business Protection.</h5>
            <h5 className="about">Understanding our Versatile Clients Needs, Incorporating Rapid Adaptability.</h5>
            <h5 className="about">Control and Command the Unpredictable.</h5>
            <h5 className="about">Any Time Anywhere</h5>
            <h5 className='about'>R | H Private Security Services</h5>
            <br className="about1"></br>
              <Col className="jobs">
                <Container className="jobs">
                  <Row>
                    
                    <Col className="recruitingPositions_item" >
                    
                    <text id='Building'>Building Security</text>  

                      <br></br>
                  <FontAwesomeIcon icon={faIdCard} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faBuilding} style={{color: "#f5b51b"}}/>
                  </Col>
                  <Col className="recruitingPositions_item">
                  Event Security
                  <br></br>
                  <FontAwesomeIcon icon={faCalendar} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faUserLock} style={{color: "#f5b51b"}}/>
                  </Col>
                  <Col className="recruitingPositions_item">
                  Restaurant Security
                  <br></br>
                  <FontAwesomeIcon icon={faUtensils} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faShieldHalved} style={{color: "#f5b51b"}}/>
                  </Col>
                  <Col className="recruitingPositions_item">
                  Hospital Security
                  <br></br>
                  <FontAwesomeIcon icon={faHospitalUser} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faShieldHeart} style={{color: "#f5b51b"}}/>
                  </Col>
                  <Col className="recruitingPositions_item">
                  Nightclub Security
                  <br></br>
                  <FontAwesomeIcon icon={faDungeon} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faUserSecret} style={{color: "#f5b51b"}}/>
                  </Col>
                  <Col className="recruitingPositions_item">
                  Church Security
                  <br></br>
                  <FontAwesomeIcon icon={faPlaceOfWorship} style={{color: "#f5b51b", paddingRight: "8%"}}/>
                  <FontAwesomeIcon icon={faUserShield} style={{color: "#f5b51b"}}/>
                  </Col>
                </Row>
                  <hr className="about"></hr>
                  <Row>  
                    <Col className="jobIcons_item">
                      Warehouse Security
                        <br></br>
                          <FontAwesomeIcon icon={faWarehouse} style={{color: "#f5b51b", paddingRight: "8%"}} />
                          <FontAwesomeIcon icon={faBuildingLock} style={{color: "#f5b51b"}}/>
                    </Col>
                    <Col className="jobIcons_item">
                      Construction Security
                        <br></br>
                          <FontAwesomeIcon icon={faHelmetSafety}  style={{color: "#f5b51b", paddingRight: "8%"}} />
                          <FontAwesomeIcon icon={faIdCardClip} style={{color: "#f5b51b", paddingRight: "2%"}}/>
                    </Col>
                    <Col className="jobIcons_item">
                      Retail Security
                        <br></br>
                        <FontAwesomeIcon icon={faShopLock} style={{color: "#f5b51b", paddingRight: "5%"}}/>
                        <FontAwesomeIcon icon={faPerson} style={{color: "#f5b51b", paddingRight: "2%"}}/>
                    </Col> 
                    <Col className="jobIcons_item">
                      Campus Security
                        <br></br>
                        <FontAwesomeIcon icon={faSchoolFlag} style={{color: "#f5b51b",paddingRight: "2%"}}/>
                        <FontAwesomeIcon icon={faShield} style={{color: "#f5b51b"}}/>
                    </Col>
                    <Col className="jobIcons_item">
                      Executive Security
                        <br></br>
                        <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#f5b51b",paddingRight: "7%"}}/>
                        <FontAwesomeIcon icon={faUserTie} style={{color: "#f5b51b"}}/>
                    </Col>
                  </Row>
              </Container>
            </Col>
          </Col>
          
        </Row>
      </Container>
    </Container>
    );
}

export default About;