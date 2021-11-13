import './Profile.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';
import { updateProfile } from '../../actions/userActions';
import Loading from '../../components/Loading';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [pic, setPic] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [picMessage, setPicMessage] = useState();
  const [aboutme, setAboutMe] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    } else {
      setName(userInfo.name);
      setAboutMe(userInfo.aboutme);
      setPic(userInfo.pic);
    }
  }, [navigate, userInfo]);

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage('Please Select an Image');
    }
    setPicMessage(null);

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'sandbox_project');
      data.append('cloud_name', 'dtnalspvj');
      fetch('https://api.cloudinary.com/v1_1/dtnalspvj/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        });
    } else {
      return setPicMessage('Please Select an Image');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword)
      dispatch(updateProfile({ name, aboutme, pic }));
  };

  return (
    <div>
      <MainScreen className="logged-in-page" title="EDIT PROFILE">
        <div>
          <Form onSubmit={submitHandler}>
            {loading && <Loading />}
            {success && (
              <ErrorMessage varient="success">
                Profile has been updated
              </ErrorMessage>
            )}
            <Row className="profile-container">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Edit Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="aboutme">
                  <Form.Label>About Me</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Edit About Me"
                    value={aboutme}
                    onChange={(e) => setAboutMe(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                {picMessage && (
                  <ErrorMessage varient="danger">{picMessage}</ErrorMessage>
                )}
                <Form.Group controlId="pic">
                  <Form.Label>Profile picture</Form.Label>
                  <Form.Control
                    onChange={(e) => postDetails(e.target.files[0])}
                    type="file"
                    lable="Edit Profile Picture"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Col>
              <Col
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={pic} alt={name} className="profile-pic"></img>
              </Col>
            </Row>
          </Form>
        </div>
      </MainScreen>
    </div>
  );
};

export default Profile;
