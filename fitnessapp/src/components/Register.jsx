import React from 'react';
import '../styles/Register.css';

function Register() {
  return (
    <div className="register-page">
      <h1 className="register-title">Rejestracja</h1>
      <form className="register-form">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="hasło" />
        <input type="password" placeholder="powtórz hasło" />
        <input type="text" placeholder="imię" />
        <input type="number" placeholder="waga" />
        <input type="number" placeholder="wzrost" />
        <button type="submit" className="register-btn">Zarejestruj się</button>
      </form>
    </div>
  );
}

export default Register;
