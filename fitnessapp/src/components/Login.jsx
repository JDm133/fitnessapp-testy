import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      <h1 className="login-title">Logowanie</h1>
      <form className="login-form">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="hasło" />
        <button type="submit" className="login-btn">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
