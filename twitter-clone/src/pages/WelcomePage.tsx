import { LoginField } from '../components/LoginField';
import { RegisterField } from '../components/RegisterField';

export function WelcomePage() {
  return (
    <div>
      <div>
        <h1>Bem vindo(a) ao Grupo do Trago</h1>
        <h2>Login</h2>
        <LoginField />
      </div>
      <div>
        <p>Não é cadastrado?</p>
        <h2>Registrar-se</h2>
        <RegisterField />
      </div>
    </div>
  );
}
