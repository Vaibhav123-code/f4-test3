import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.status === 200 ) {
          console.log(response.data)
          onLogin(response.data);
          setMessage('Login successful!');
        } else {
          setMessage('Login failed. Please check your username and password.');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        setMessage('An error occurred while logging in. Please try again.');
      });
  };

  return (
    <div className='container'>
      <h2 className='heading'>Login</h2>
      {message && <p className='message'>{message}</p>}
      <div className='formGroup'>
        <label className='label'>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input'
        />
      </div>
      <div className='formGroup'>
        <label className='label'>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input'
        />
      </div>
      <button onClick={handleLogin} className='button'>Log In</button>
    </div>
  );
};

export default Login;
