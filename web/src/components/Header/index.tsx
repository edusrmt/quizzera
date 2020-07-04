import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Quizzera's logo" />
    </Container>
  );
}

export default Header;