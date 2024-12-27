import React, { useState } from 'react';

function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');

    setUser({ name, email });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser({ name: '', email: '' });
    setIsLoggedIn(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#0056b3' : '#007bff',
    color: '#fff',
    padding: '.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  return (
    <div
      style={{
        margin: '2rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '1.5rem',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        {isLoggedIn ? (
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#333' }}>Welcome, {user.name}!</h4>
            <p style={{ marginBottom: '1.5rem', color: '#555' }}>Email: {user.email}</p>
            <button
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h4 style={{ marginBottom: '1.5rem', color: '#333' }}>Log In</h4>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold', color: '#555' }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                }}
                required
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '.5rem', fontWeight: 'bold', color: '#555' }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default User;
