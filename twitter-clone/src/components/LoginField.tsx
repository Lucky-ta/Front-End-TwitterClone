import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/loginUser';
import { MyContext } from '../contexts/MyContext';

export function LoginField() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRender, setIsRender] = useState(true);

  const { setToken } = useContext(MyContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsRender(false);
    try {
      const token = await loginUser({
        email,
        password,
      });
      if (token.message) {
        setIsRender(true);
        setError(token.message);
      } else {
        setToken(token);
        setIsRender(true);
        return navigate('/home');
      }
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
