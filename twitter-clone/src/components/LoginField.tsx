import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../css/WelcomePage.css';

export function LoginField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRender, setIsRender] = useState(true);

  const { signin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsRender(false);

    const result = await signin(email, password);
    if (result.message) {
      setError(result.message);
      setIsRender(true);
    } else {
      return navigate('/home');
    }
  };

  return (
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
            className='enter-btn'
              type="submit"
              disabled={password.length < 6}
            >
              Entrar
            </button>
          </div>
        ) : 'Carregando...'}
      { error.length != 0 && <span>{ error }</span> }
    </form>
  );
}
