import { Link } from 'react-router-dom';

export function InvalidUser() {
  return (
    <div>
      <h2>Você não tem permisão para acessar esta pagina!</h2>
      <span>Talvez o seu token de acesso tenha expirado, faça o login novamente!</span>
      <span>volte para a pagina inicial clicando </span>
      <Link to="/">AQUI</Link>
    </div>
  );
}
