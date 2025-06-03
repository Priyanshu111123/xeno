// src/pages/HomePage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MiniCRM</div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About Us</li>
          <li onClick={() => navigate('/login')}>Login</li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li onClick={() => navigate('/')}>🏠 Home</li>
          <li onClick={() => navigate('/features')}>🛠 Features</li>
          <li onClick={() => navigate('/contact')}>📞 Contact</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="home-content">
        <h1>Welcome to Mini CRM Platform</h1>
        <p>Your all-in-one solution for managing campaigns and clients.</p>
        <button className="btn-primary" onClick={() => navigate('/login')}>
          Get Started
        </button>
        <img
          src="https://th.bing.com/th/id/OIP.2MjJdnbgxMZgcpEPCFKJ4wHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="CRM Illustration"
          className="home-image"
        />
      </main>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Mini CRM is a robust campaign management platform designed to streamline client communication, drive marketing success, and boost productivity.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
