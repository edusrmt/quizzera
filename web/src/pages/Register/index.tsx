import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import server from '../../services/server';
import { login } from '../../services/auth';

import { Container, Input, Button } from '../../styles/global';
import { Content } from './styles';
import logo from '../../assets/logo.png';

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
      login(response.data.token);
      history.push('/quizzes');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logotipo do Quizzera" />
        <p>Are you up for a challenge?</p>
        { errors.length > 0 && 
          <div className="errors-container">
            {
              errors.map((error) => (
                <span key={error}>{error}</span>
              ))
            }
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
          <fieldset>
            <label htmlFor="password2">Confirm Password</label>
            <Input type="password" name="password2" id="password2" onChange={handleInputChange} />
          </fieldset>
          <Button type="submit">Register</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Register;