import { Link } from 'react-router-dom';
import { LoginField } from '../components/LoginField';
import { RegisterField } from '../components/RegisterField';
import '../css/WelcomePage.css';

export function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="title">
        <h1>Bem vindo(a) ao Grupo do Trago</h1>
      </div>
      <div className="login-form">
        <LoginField />
      </div>
      <Link to="/register">Cadastre-se</Link>
    </div>
  );
}
