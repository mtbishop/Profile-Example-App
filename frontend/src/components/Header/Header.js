import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {}, [userInfo]);

  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Sandbox Coding Project</Navbar.Brand>
          <Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/clients">View Clients</Nav.Link>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
