import { Link } from 'react-router-dom';
import React from 'react';
import LoginField from '../components/LoginField';
import '../css/WelcomePage.css';

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="title-div">
        <h1 className="title">Bem vindo(a) ao Grupo do Trago!</h1>
      </div>
      <div className="login-form">
        <LoginField />
      </div>
      <div className="register-div">
        <Link className="register-txt" to="/register">Não é cadastrado? Cadastre-se!</Link>
      </div>
    </div>
  );
}
