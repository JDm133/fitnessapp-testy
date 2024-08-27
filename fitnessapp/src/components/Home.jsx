import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import panieImage from '../assets/panie.jpg'; // Dynamiczny import obrazu

function Home() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/register');
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">GOALFIT</h1>
        <div className="buttons">
          <button className="btn" onClick={handleSignUpClick}>SIGN UP</button>
          <button className="btn" onClick={handleLoginClick}>LOGIN</button>
        </div>
      </div>
      <div className="content">
        <img src={panieImage} alt="Ladies exercising" className="background-image" />
        <div className="overlay">
          <h2 className="main-text">
            Be your <span className="highlight">best</span>
          </h2>
          <button className="join-btn" onClick={handleJoinClick}>Join Today</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
