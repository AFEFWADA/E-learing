import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Naavbar() {
  const location = useLocation(); 
  const navigate = useNavigate();

  
  const showLoginButton = ["/", "/about-us", "/categories"].includes(location.pathname);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => navigate('/')} className="mx-2">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/about-us')} className="mx-2">About Us</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown" className="mx-2">
              <NavDropdown.Item onClick={() => navigate('/categories/ml')}>Machine Learning</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categories/web-dev')}>Web Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('/categories/sql')}>Sql and No-Sql</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex mx-auto">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="dark">Search</Button>
          </Form>

          {/* Conditionally render the Login button */}
          {showLoginButton && (
            <Button variant="dark" className="mx-2" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
