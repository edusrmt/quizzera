import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import server from '../../services/server';
import { login } from '../../services/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const history = useHistory();

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
    <>
      <h1>Login</h1>
      {
        error !== '' && <span style={{ display: 'block', color: 'red' }}>{error}</span>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleInputChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleInputChange} />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;