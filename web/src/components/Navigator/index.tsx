import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Star, User } from 'react-feather';

import { Container } from './styles';

interface NavigatorProps {
  active: number;
}

const Navigator: React.FC<NavigatorProps> = ({ active }) => {
  return (
    <Container>
      <Link className={active === 0 ? 'active' : ''} to="/quizzes"><HelpCircle />Quizzes</Link>
      <Link className={active === 1 ? 'active' : ''} to="/rank"><Star />Rank</Link>
      <Link className={active === 2 ? 'active' : ''} to="/profile"><User />Profile</Link>
    </Container>
  );
}

export default Navigator;