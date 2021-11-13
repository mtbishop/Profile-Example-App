import React, { useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      navigate('/profile');
    }
  }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="main-header">Coding Project</h1>
              <p className="sub-header">for Sandbox Inc.</p>
            </div>
            <div className="button-container">
              <Link to="/login">
                <Button size="lg" className="first-page-button">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" className="first-page-button">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FirstPage;
