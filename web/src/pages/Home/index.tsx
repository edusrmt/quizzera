import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 style={{margin: '1rem'}}>Home</h1>
      <p>Got an account? <Link to="/login">Login</Link></p>
      <p>Not yet? <Link to="/register">Register</Link></p>
    </>
  );
}

export default Home;