import React, { useEffect, useState } from 'react';
import server from '../../services/server';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';

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
      <h1 style={{ margin: '1rem' }}>Profile</h1>
      <h3>{user?.username}</h3>      
      { picture && <img src={picture} alt="User avatar" /> }
      <p>Accuracy: {user?.accuracy.toFixed(2)}</p>
      <p>Speed: {user?.speed.toFixed(2)}</p>
      <p>Wisdom: {user?.wisdom.toFixed(2)}</p>
      <button style={{color: 'red'}} onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;