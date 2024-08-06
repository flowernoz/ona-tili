import React, { useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { FaLock } from "react-icons/fa";
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='wrapper'>
      <div className="main">
        <h1>Admin Page</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="input-card">
            <GoPerson className='icoun' />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <br /><br />
          <div className="input-card">
            <FaLock className='icoun' />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
