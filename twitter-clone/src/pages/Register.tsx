import { RegisterField } from '../components/RegisterField';

export function Register() {
  return (
    <div className='welcome-page'>
      <div className="register-form">
        <h2 className="register-name">Registrar-se</h2>
        <RegisterField />
      </div>
    </div>
  );
}
