import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import "./Header.css";
function Header(){
    const [activeLink, setActiveLink] = useState('/home');

  const handleLinkClick = (eventKey) => {
    setActiveLink(eventKey);
  };

    return(
        <>
    <Navbar expand="lg" className="navbar bg-black shadow   position-sticky top-0 start-0" >
      <Container>
        <Navbar.Brand href="#home" className='name brand fs-2'>Aditee </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            
        <Nav className="ms-auto justify " variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link  eventKey="link-1" className={activeLink === 'link-1  ' ? 'active-link' : 'text-light name' } href="/home"
         onClick={() => handleLinkClick('link-1')}
        >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  eventKey="link-2" className={activeLink === 'link-2' ? 'active-link' : 'text-light name'} href="/about-me"
        onClick={()=> handleLinkClick('link-2')}
        >About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" className={activeLink === 'link-3' ? 'active-link' : 'text-light name'} href="/work"
        onClick={()=>handleLinkClick('link-3')}
        >Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4" className={activeLink === 'link-4' ? 'active-link' : 'text-light name'} href="/contact-me"
        onClick={()=>handleLinkClick('link-4')}
        >Conatct Me</Nav.Link>
      </Nav.Item>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;