import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/loginUser';

export function LoginField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = await loginUser({
        email,
        password,
      });
      token.message ? setError(token.message) : token && navigate('/home');
      return token;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="EMAIL">E-mail: </label>
        <input
          type="email"
          required
          id="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
      </div>
      <div>
        <label htmlFor="PASSWORD">Senha: </label>
        <input
          type="passowrd"
          required
          id="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite uma senha de acesso"
        />
      </div>
      <button
        type="submit"
        disabled={password.length < 6}
      >
        Login
      </button>
      { error.length != 0 && <span>{ error }</span> }
    </form>
  );
}
