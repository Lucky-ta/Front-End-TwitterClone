import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WelcomePage.css';
import userAPI from '../services/userAPI';

export default function LoginField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRender, setIsRender] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsRender(false);

    const result = await userAPI.signin({ email, password });
    if (result.message) {
      setError(result.message);
      setIsRender(true);
    } else {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));

      setIsRender(true);
      navigate('/home');
    }
  };

  return (
    isRender ? (
      <form onSubmit={handleSubmit}>
        <h2 className="form-name">Entrar</h2>
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
            <div className="submit-btn">
              <button
                className="enter-btn"
                type="submit"
                disabled={password.length < 6}
              >
                Entrar
              </button>
            </div>
          ) : 'Carregando...'}
        {error.length !== 0 && <span>{error}</span>}
      </form>
    ) : (
      <div>
        <p>Entrando...</p>
      </div>
    )
  );
}
