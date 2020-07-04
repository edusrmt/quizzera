import React, { useEffect, useState } from 'react';
import { Crosshair, Clock, Award } from 'react-feather';
import server from '../../services/server';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Navigator from '../../components/Navigator';

import { Container } from '../../styles/global';
import { Content } from './styles';

interface User {
  username: string;
  accuracy: number;
  speed: number;
  wisdom: number;
}

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [picture, setPicture] = useState('');

  const history = useHistory();

  useEffect(() => {
    server.get('/user').then(user => {
      setUser(user.data);
      setPicture(`https://api.adorable.io/avatars/150/${user.data.username}@quizzera.png`);
    });
  }, []);

  function handleLogout () {
    logout();
    history.push('/');
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          { picture && <img src={picture} alt="User avatar" /> }
          <h3>{user?.username}</h3>
          <span>
            <Crosshair /> {user?.accuracy ? user.accuracy.toFixed(2) : 0}
            <Clock /> {user?.speed ? user.speed.toFixed(2) : 0}
            <Award /> {user?.wisdom ? user.wisdom.toFixed(2) : 0}
          </span>
          <button onClick={handleLogout}>Logout</button>
        </Content>
      </Container>      
      <Navigator active={2} />
    </>
  );
}

export default Profile;