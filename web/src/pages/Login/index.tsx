import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import server from '../../services/server';
import { login, isAuthenticated } from '../../services/auth';

import { Container, Input, Button } from '../../styles/global';
import { Content } from './styles';
import logo from '../../assets/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const history = useHistory();

  useEffect(() => {
    if(isAuthenticated())
      history.push('/quizzes');
  }, [history]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit (event: FormEvent) {
    event.preventDefault();
    
    await server.post('login', formData)
      .then(res => {
        login(res.data.token);
        history.push('/quizzes');
      })
      .catch(err => {
        setError(err.response.data.error);
      });
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Quizzera's logo" />
        <p>Don't stop climbing!</p>
        { error && 
          <div className="error-container">
            <span >{error}</span>
          </div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <Input type="text" name="username" id="username" onChange={handleInputChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" id="password" onChange={handleInputChange} />
          </fieldset>
          <Button type="submit" primary>Login</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;