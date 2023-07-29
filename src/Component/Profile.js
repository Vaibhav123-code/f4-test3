import React from 'react';

const Profile = ({ username, onLogout }) => {
    console.log(username)
  return (
    <div className="container">
      <h2 className="header">Welcome, {username.firstName}!</h2>
      <p className="info">
        <strong>Email:</strong> {username.email}
      </p>
      <p>Gender : {username.gender}</p>
     <img src={username.image}/>
      {/* Display any other bhjhj relevant username information here */}
      <button onClick={onLogout} className="logoutButton">
        Logout
      </button>
    </div>
  );
};

export default Profile;
