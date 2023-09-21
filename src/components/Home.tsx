import React, {useState} from 'react';
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
import checkmark from './Images/checkmark.svg';
import checkmarkwhite from './Images/checkmark-white.svg';
import nursewoman from './Images/nurse-woman.svg';
import openeddropdown from './Images/opened-dropdown.svg';
import closeddropdown from './Images/closed-dropdown.svg';
import doctorman from './Images/doctor-man.svg';
import map from './Images/map.svg';
import locationmarker from './Images/location-marker.svg';
import phone from './Images/phone.svg';
import clock from './Images/Clock-Checked.svg';
import testimonialguy from './Images/testimonial-guy.svg';
import fivestars from './Images/five-stars.svg';
import austin from './Images/austin.svg';
import linkedin from './Images/linkedin.svg';
import instagram from './Images/nstagram.svg';
import facebook from './Images/facebook.svg';
import youtube from './Images/youtube.svg';
import slider from './Images/slider.svg';



const Home: React.FC = () => {
    const[isMakeAppointmentShown, setIsMakeAppointmentShown] = useState<boolean>(true);

  return (
    <div>
        <div className='jumbotron'>
            <div className='grey-film'>
                <Navbar expand='lg' className='navbar'>
                    <Container fluid style={{padding: '0px'}}>
                        <Navbar.Brand className='navbar-brand'>
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
                            <div className='services-list-div'>
                                <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Complete Family Health Care</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>EKG</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>X-Ray</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Ultrasound</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Acute and Chronic Care</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Well Woman's Exam</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='services-div other-service-div'>
                            <img src={food} alt='Vegan Food' className='services-images'></img>
                            <p className='services-heading'>Holistic Wellness</p>
                            <p className='services-text'>Lmedic Center provides the following health care services</p>
                            <div className='services-list-div'>
                                <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Weight Loss</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Therapeutic medical massage</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Holistic skin care</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>K-laser pain management</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Detoxification</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmark} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-text'>Hormone replacement therapy</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='services-div coronavirus-div'>
                            <img src={coronavirus} alt='Coronavirus' className='services-images'></img>
                            <p className='services-heading'>Allergy and Immunology</p>
                            <p className='services-text'>Lmedic Center provides the following health care services</p>
                            <div className='services-list-div'>
                                <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Allergy and immunology</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Testing for Immunology</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Allergy treatments</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Asthma care</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Dematology</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={2} sm={2} md={2} lg={2} style={{paddingRight: '0px'}}>
                                            <img src={checkmarkwhite} alt='Checkmark' className='checkmark'></img>
                                        </Col>
                                        <Col xs={10} sm={10} md={10} lg={10} style={{paddingLeft: '0px'}}>
                                            <p className='services-list-active-text'>Pediatric allergy</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='faq-div'>
            <p className='faq-heading'>Frequently asked Questions</p>
            <Container fluid style={{marginTop: '30px'}}>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div style={{width: '100%'}} className='faq-each-div'>
                            <button className='dropdown-button' onClick={() => setIsMakeAppointmentShown(!isMakeAppointmentShown)}>
                                <span className='dropdown-heading-text'>How do I make an appointment?</span>
                                {isMakeAppointmentShown ? 
                                    <img src={openeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img> :
                                    <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                                }
                            </button>
                            {isMakeAppointmentShown ? 
                                <div className='faq-each-text-div'>
                                    <p>If you would like to make an appointent with any one of our practitioners, please contact our reception staff. Alternatively you can book an appointment online. Every effort will be made to accomodate your preffered time and choice of practitioner</p>
                                </div> : 
                                null
                            }
                        </div>

                        <div style={{width: '100%'}} className='faq-each-div'>
                            <button className='dropdown-button'>
                                <span className='dropdown-heading-text'>How do I get a copy of my record?</span>
                                <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                            </button>
                        </div>

                        <div style={{width: '100%'}} className='faq-each-div'>
                            <button className='dropdown-button'>
                                <span className='dropdown-heading-text'>Is there a charge for extra copies?</span>
                                <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                            </button>
                        </div>

                        <div style={{width: '100%'}} className='faq-each-div'>
                            <button className='dropdown-button'>
                                <span className='dropdown-heading-text'>How do I know the right practitioner?</span>
                                <img src={closeddropdown} alt='Dropdown Icon' className='dropdown-icon-image'></img>
                            </button>
                        </div>

                        <button className='ask-questions'>Ask Questions</button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img src={nursewoman} alt='Nurse Woman' className='faq-nursewoman'></img>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='specialists-div'>
            <p className='our-specialists-heading'>Our Specialists</p>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='cardiotherapist-div each-specialist-div'>
                            <div className='each-specialist-image-div'>
                                <img src={doctorman} alt='Doctor Man' className='doctor-man'></img>
                            </div>
                            <div className='each-specialist-info-div'>
                                <p className='doctor-name'>Dr. William Geralg</p>
                                <p className='doctor-specialty'>Cardiotherapist</p>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Mon - Thur</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Friday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Saturday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='cardiotherapist-div each-specialist-div'>
                            <div className='each-specialist-image-div'>
                                <img src={doctorman} alt='Doctor Man' className='doctor-man'></img>
                            </div>
                            <div className='each-specialist-info-div'>
                                <p className='doctor-name'>Dr. William Geralg</p>
                                <p className='doctor-specialty'>Cardiotherapist</p>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Mon - Thur</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Friday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Saturday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='cardiotherapist-div each-specialist-div'>
                            <div className='each-specialist-image-div'>
                                <img src={doctorman} alt='Doctor Man' className='doctor-man'></img>
                            </div>
                            <div className='each-specialist-info-div'>
                                <p className='doctor-name'>Dr. William Geralg</p>
                                <p className='doctor-specialty'>Cardiotherapist</p>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Mon - Thur</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Friday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} sm={6} md={6} lg={6} className=''>
                                        <p className='available-date'>Saturday</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} className='schedule-col'>
                                        <p className='available-time'>08:00 - 20:00</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='testimonial-div'>
            <div className='blueish-film'>
                <h1 className='testimonial-heading'>Testimonials</h1>
                <div className='testimonial-text-div'>
                    <div className='testimonial-person-div'>
                        <img src={testimonialguy} alt='Person' className='testimonial-person'></img>
                    </div>
                    <p className='testimonial-text'>“Joby made searching for a job easier and reduced the time framewhile eliminating the office to office conventional mode of application”</p>
                    <Container fluid style={{marginTop: '20px'}}>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} style={{paddingRight: '3px'}}>
                                <img src={fivestars} alt='Five Stars' style={{width: '160px', height: '26px', float: 'right'}}></img>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} style={{paddingLeft: '3px'}}>
                                <p className='testimonial-writer-name'>
                                    <span style={{color: 'white'}}>-Orlando Philip</span>
                                    <span style={{color: '#0052FF'}}>(UI Designer)</span>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <div className='slider-div'>
                        <img src={slider} alt='Slider' style={{width: '80px', height: '25px'}}></img>
                    </div>
                </div>
            </div>
        </div>

        <div className='looking-for-div'>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img src={austin} alt='Person' className='austin'></img>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} style={{paddingBottom: '50px'}}>
                        <p className='looking-for-heading'>Looking For a Professional</p>
                        <div>
                            <input placeholder='John Doe' className='looking-input'></input>

                            <input placeholder='johndoe@gmail.com' className='looking-input email-input'></input>

                            <input placeholder='Type message here' className='looking-input message-input'></input>

                            <button className='book-appointment'>Book Appointment</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div>
            <img src={map} alt='Map' className='map'></img>
        </div>

        <div className='contact-div'>
            <p className='contact-us-heading'>Contact Us</p>
            <p className='do-not-hesitate'>Do not hesitate to contact us</p>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='contact-image-div'>
                            <img src={locationmarker} alt='Location Marker' className='contact-image'></img>
                        </div>
                        <p className='contact-info-heading-text'>Our Address</p> 
                        <p className='contact-info-text'>27 Fulton Street Brooklyn, New York</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='contact-image-div'>
                            <img src={phone} alt='Phone' className='contact-image'></img>
                        </div>
                        <p className='contact-info-heading-text'>Phone number</p> 
                        <p className='contact-info-text'>Manager <span style={{color: '#0052FF'}}>+918065502317</span></p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className='contact-image-div'>
                            <img src={clock} alt='Clock' className='contact-image'></img>
                        </div>
                        <p className='contact-info-heading-text'>Working hours</p> 
                        <p className='contact-info-text'>Mon - Sat 8:00am - 9:00pm</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='footer'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <p className='footer-name'>Mediclab</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <p className='copyright'>2022 Mediclab</p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} className='socials-col'>
                        <Row>
                            <Col xs={3} sm={3} md={3} lg={3} className='socials-inner-col'>
                                <img src={linkedin} alt='LinkedIn' className='socials-icon'></img>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className='socials-inner-col'>
                                <img src={youtube} alt='Youtube' className='socials-icon'></img>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className='socials-inner-col'>
                                <img src={facebook} alt='Facebook' className='socials-icon'></img>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className='socials-inner-col'>
                                <img src={instagram} alt='Instagram' className='socials-icon'></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    </div>
  )
}

export default Home