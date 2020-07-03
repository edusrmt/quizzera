import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import server from '../../services/server';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  
  const history = useHistory();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit (event: FormEvent) {
    event.preventDefault();

    const response = await server.post('register', formData);

    if (response.data.errors) {
      setErrors(response.data.errors);
    } else if (response.status === 200) {
      alert('You are now registered.');
      history.push('/login');
    }
  }

  return (
    <>
      <h1>Register</h1>
      {
        errors.map((error) => <span style={{ display: 'block', color: 'red' }} key={error}>{error}</span>)
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
        <fieldset>
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" id="password2" onChange={handleInputChange} />
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;