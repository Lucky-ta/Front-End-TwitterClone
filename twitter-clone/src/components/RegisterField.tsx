import { useState } from 'react';
import { registerUser } from '../services/registerUser';

export function RegisterField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isRender, setIsRender] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsRender(false);
    try {
      const token = await registerUser({
        name,
        email,
        password,
      });
      if (token.message) {
        setIsRender(true);
        setError(token.message);
      } else {
        setError('Cadastro feito com sucesso!');
        setIsRender(true);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          required
          id="USERNAME"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </div>
      <div>
        <input
          type="email"
          required
          id="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          required
          id="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
      </div>
      {isRender
        ? (
          <div>
            <button
              type="submit"
              disabled={password.length < 6 || !name || !email}
            >
              Registrar
            </button>
          </div>
        ) : 'Carregando...'}
      { error.length != 0 && <span>{ error }</span> }
    </form>
  );
}
