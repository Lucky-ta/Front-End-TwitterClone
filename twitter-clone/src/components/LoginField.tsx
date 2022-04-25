import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

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
      return navigate('/home')
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
          type="password"
          required
          id="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite uma senha de acesso"
        />
      </div>
      {isRender
        ? (
          <button
            type="submit"
            disabled={password.length < 6}
          >
            Login
          </button>
        ) : 'Carregando...'}
      { error.length != 0 && <span>{ error }</span> }
    </form>
  );
}
