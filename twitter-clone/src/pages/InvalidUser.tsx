import { Link } from 'react-router-dom';
import React from 'react';
import '../css/InvalidUserPage.css';

export default function InvalidUser() {
  return (
    <div className='invalidUser-container'>
      <h2 className='invalidUser-title'>Você não tem permisão para acessar esta pagina!</h2>
      <div className='invalidUser-text-container'>
        <span>Talvez o seu token de acesso tenha expirado, faça o login novamente!</span>
        <span>volte para a pagina inicial clicando </span>
      </div>
      <Link className='invalidUser-link' to="/">AQUI</Link>
    </div>
  );
}
