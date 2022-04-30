import { LoginField } from '../components/LoginField';
import { RegisterField } from '../components/RegisterField';
import '../css/WelcomePage.css'

export function WelcomePage() {
  return (
    <div className='welcome-page'>
      <div className='title'>
        <h1>Bem vindo(a) ao Grupo do Trago</h1>
      </div>
      <div className='login-form'>
        <LoginField />
      </div>
      <hr />
        <p className='not-registered-txt'>Não é cadastrado?</p>
      <div className='register-form'>
        <h2 className='form-name'>Registrar-se</h2>
        <RegisterField />
      </div>
    </div>
  );
}
