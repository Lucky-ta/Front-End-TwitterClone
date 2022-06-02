import { BiHomeAlt, BiExit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export function Header({ title }:any) {
  const redirectHomePage = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handlerExit = () => {
    localStorage.setItem('authToken', '');
    window.location.href = '/';
  };

  return (
    <div>
      <header className="header">
        <Link to="/home">
          <button onClick={redirectHomePage} className="home-btn-header"><BiHomeAlt size="2em" /></button>
        </Link>
        <h1 className="main-page-txt">{title}</h1>
        <button onClick={handlerExit} className="exit-btn-header"><BiExit size="2em" /></button>
      </header>
      <hr />
    </div>
  );
}
