import React, { useState } from 'react';
import cookie from 'js-cookie';
import './index.css'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Change to false if user is not logged in

  const handleLogout = () => {
    // Delete the cookie here
    cookie.remove('username');
    setLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <header className='header-container'>
      <h1>Swiggato</h1>
      {loggedIn && (
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
};

export default Header;
