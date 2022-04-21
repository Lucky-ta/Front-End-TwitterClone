import { useState } from 'react';
import { registerUser } from '../services/registerUser';

export function RegisterField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = await registerUser({
        name,
        email,
        password,
      });
      token.message ? setError(token.message) : token;
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="USERNAME">Nome: </label>
        <input
          type="text"
          required
          id="USERNAME"
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div>
        <label htmlFor="EMAIL">E-mail: </label>
        <input
          type="email"
          required
          id="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um e-mail"
        />
      </div>
      <div>
        <label htmlFor="PASSWORD">Senha: </label>
        <input
          type="passowrd"
          required
          id="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Crie uma senha para login"
        />
      </div>
      <button
        type="submit"
        disabled={password.length < 6 || !name || !email}
      >
        Registrar
      </button>
      { error.length != 0 && <span>{ error }</span> }
    </form>
  );
}
