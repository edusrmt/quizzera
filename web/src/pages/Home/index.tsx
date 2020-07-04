import React from 'react';

import { Button } from '../../styles/global';
import { Container } from './styles';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <Container>
      <div className="content">
        <img src={logo} alt="Logotipo do Quizzera" />
        <p>Answer correctly to get to the top!</p>
        <Button>Register</Button>
        <Button>Login</Button>
      </div>
    </Container>
  );
}

export default Home;