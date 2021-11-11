import { Navbar, Container, Nav } from 'react-bootstrap';
import '../style/HeaderNav.css';

function HeaderNav() {
  return (
    <>
      <Navbar id="navBar" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link id="homeLink" href="#home">
              Home
            </Nav.Link>
          </Nav>
          <Navbar.Brand id="welcomeHeader">Welcome User!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id="profileLink" href="#profile">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNav;
