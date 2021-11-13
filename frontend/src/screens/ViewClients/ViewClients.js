import React from 'react';
import { Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';

const ViewClients = () => {
  return (
    <MainScreen title="CLIENTS">
      <div className="client-page">
        <Card style={{ width: '18rem' }}>
          <Card.Img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
          <Card.Body>
            <Card.Title>CLIENT NAME</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              posuere mattis enim quis ullamcorper. Mauris vel lacus congue,
              rhoncus ligula ac, aliquam enim. Vivamus non nisi pellentesque
              ipsum sodales rutrum in nec sapien. Ut feugiat felis erat. Proin
              non arcu elit. Phasellus pulvinar, urna sed efficitur aliquet,
              justo turpis sollicitudin dolor
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </MainScreen>
  );
};

export default ViewClients;
