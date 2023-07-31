import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import doctorsbag from './Images/doctors-bag.svg';
import labitems from './Images/lab-items.svg';
import medicaldoctor from './Images/Medical-Doctor.svg';
import brain from './Images/brain.svg';
import testtube from './Images/test-tube.svg';
import tooth from './Images/tooth.svg';
import heartwithpulse from './Images/heart-with-pulse.svg';
import gynaecology from './Images/vagina.svg';
import medicinelogo from './Images/caduceus.svg';
import accident from './Images/Car-Accident.svg';
import baby from './Images/Child-With-Pacifier.svg';
import nurse from './Images/nurse.svg';
import food from './Images/vegan-food.svg';
import coronavirus from './Images/Coronavirus.svg';


const Home: React.FC = () => {
  return (
    <div>
        <div className='jumbotron'>
            <div className='grey-film'>
                <Navbar expand='md' className='navbar'>
                    <Container fluid>
                        <Navbar.Brand style={{paddingLeft: '50px'}}>
                            <span>
                                <span className='medic-span'>Medic</span><span className='lab-span'>lab</span>
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button" onClick={() => {if (window.innerWidth <= 991) {/* setShowDropdownPage(!showDropdownPage) */}}}/>
                        <Navbar.Collapse id="basic-navbar-nav" className='basic-navbar-nav'>
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='nav-links home-link'>Home</Nav.Link>
                                <Nav.Link href="#link" className='nav-links'>About us</Nav.Link> 
                                <Nav.Link href="#link" className='nav-links'>Services</Nav.Link>
                                <Nav.Link href="#link" className='nav-links'>Pages</Nav.Link> 
                                <Nav.Link href="#link" className='nav-links'>Blog</Nav.Link>
                                <Nav.Link href="#link" className='nav-links'>Contact us</Nav.Link>  
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='jumbotron-text-div'>
                    <p className='we-provide'>We Provide</p>
                    <p className='full-medical-care'>Full Medical Care!</p>
                    <p className='highest-standard'>Highest standard of medical service</p>
                    <button className='know-more'>Know More</button>
                </div>
            </div>
        </div>

        <div style={{marginTop: '30px', paddingBottom: '60px'}}>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='service-div'>
                            <img src={doctorsbag} alt="Doctor's Bag" className='services-icon-image'></img>
                            <p className='service-name-span'>24 Hour Emergency</p>
                            <p className='service-info-text'>Open round the clock for convenience, quick and easy access</p>
                        </div>
                        
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='service-div'>
                            <img src={labitems} alt='Lab Items' className='services-icon-image'></img>
                            <p className='service-name-span'>Complete lab sevice</p>
                            <p className='service-info-text'>Cost-efficient, comprehensive and clinical laboatory services</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='service-div'>
                            <img src={medicaldoctor} alt='Medical Doctor' className='services-icon-image'></img>
                            <p className='service-name-span'>Medical Professionals</p>
                            <p className='service-info-text'>Qualifed and certified physicians for quality medical care</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='our-departments-div'>
            <p className='our-departments-heading'>Our Departments</p>
            <p className='our-departments-info-text'>Lmedic medical care specialises in various services for the convenience of the patients</p>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='psychiatry-div'>
                            <div className='departments-inner-div'>
                                <img src={brain} alt='Brain' className='departments-images'></img>
                            </div>
                            <p>Psychiatry</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div laboratory-div'>
                            <div className='departments-inner-div'>
                                <img src={testtube} alt='Test Tube' className='departments-images'></img>
                            </div>
                            <p>Laboratory</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={tooth} alt='Tooth' className='departments-images'></img>
                            </div>
                            <p>Dentistry</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={heartwithpulse} alt='Heart With Pulse' className='departments-images'></img>
                            </div>
                            <p>Cardiology</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={gynaecology} alt='Gynaecology' className='departments-images'></img>
                            </div>
                            <p>Gynecology</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={medicinelogo} alt='Medicine Logo' className='departments-images'></img>
                            </div>
                            <p>Medicine</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={accident} alt='Accident' className='departments-images'></img>
                            </div>
                            <p>Emergency</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='other-departments-div'>
                            <div className='departments-inner-div'>
                                <img src={baby} alt='Baby' className='departments-images'></img>
                            </div>
                            <p>Pediatrics</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='services-div'>
            <p className='our-services-heading'>Our Services</p>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='services-div other-service-div'>
                            <img src={nurse} alt='Nurse' className='services-images'></img>
                            <p className='services-heading'>Prima Care Physicia</p>
                            <p className='services-text'>Lmedic Center provides the following health care services</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='services-div other-service-div'>
                            <img src={food} alt='Vegan Food' className='services-images'></img>
                            <p className='services-heading'>Holistic Wellness</p>
                            <p className='services-text'>Lmedic Center provides the following health care services</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='services-div coronavirus-div'>
                            <img src={coronavirus} alt='Coronavirus' className='services-images'></img>
                            <p className='services-heading'>Allergy and Immunology</p>
                            <p className='services-text'>Lmedic Center provides the following health care services</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='faq-div'>
            <p className='faq-heading'>Frequently asked Questions</p>
        </div>

    </div>
  )
}

export default Home