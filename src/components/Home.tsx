import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import doctorsbag from './Images/doctors-bag.svg';
import labitems from './Images/lab-items.svg';
import medicaldoctor from './Images/Medical-Doctor.svg';


const Home: React.FC = () => {
  return (
    <div>
        <div className='jumbotron'>
            <div className='grey-film'>
                <Navbar expand='md' className='navbar'>
                    <Container fluid>
                        <Navbar.Brand><span>MedicLab</span></Navbar.Brand>
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
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <img src={doctorsbag} alt="Doctor's Bag" className='services-icon-image'></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta. Accusamus, adipisci repellat inventore quis libero, voluptas et ipsum deleniti qui ratione eveniet. Adipisci incidunt quibusdam, non vero laborum quia?</p>
                        </div>
                        
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <img src={labitems} alt='Lab Items' className='services-icon-image'></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta. Accusamus, adipisci repellat inventore quis libero, voluptas et ipsum deleniti qui ratione eveniet. Adipisci incidunt quibusdam, non vero laborum quia?</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div>
                            <img src={medicaldoctor} alt='Medical Doctor' className='services-icon-image'></img>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta. Accusamus, adipisci repellat inventore quis libero, voluptas et ipsum deleniti qui ratione eveniet. Adipisci incidunt quibusdam, non vero laborum quia?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Home