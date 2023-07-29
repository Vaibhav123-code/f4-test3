import React, { useState } from 'react';
import Login from './Component/Login';
import Profile from './Component/Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      {loggedIn ? (
        <Profile username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {loggedIn && <button onClick={handleLogout}>Log Out</button>}
    </div>
  );
};

export default App;

