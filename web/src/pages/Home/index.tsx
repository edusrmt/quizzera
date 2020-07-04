import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Button } from '../../styles/global';
import { Content } from './styles';
import logo from '../../assets/logo.png';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <img src={logo} alt="Quizzera's logo" />
        <p>Answer correctly to get to the top!</p>
        <Button onClick={() => history.push('/register')}>Register</Button>
        <Button onClick={() => history.push('/login')}>Login</Button>
      </Content>
    </Container>
  );
}

export default Home;