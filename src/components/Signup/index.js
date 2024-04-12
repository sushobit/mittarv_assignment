import React, { useState } from 'react';
import cookie from 'js-cookie';
import './index.css'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Here you can add your validation logic for username and password
    // For simplicity, I'm just checking if they are not empty
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Create a cookie with username
    cookie.set('username', username);

    // Optionally, you can store the username and password in local storage as well
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to another page using window.location.href
    window.location.href = '/home'; // This will reload the page

    // Alternatively, you can use window.location.pathname if you don't want to reload the page
    // window.location.pathname = '/home';
  };

  return (
    <div className="signup-container">
      <div className='mid-container'>
          <h2>Sign Up</h2>
          <input
          className='input-design'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className='input-design'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className='signup-button' onClick={handleSignUp}>Sign Up</button>
      </div>
  </div>
  );
}

export default SignUp;
