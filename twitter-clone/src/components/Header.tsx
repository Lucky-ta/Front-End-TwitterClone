import { BiHomeAlt, BiExit } from 'react-icons/bi';

export function Header() {
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
        <button onClick={redirectHomePage} className="home-btn-header"><BiHomeAlt size="2em" /></button>
        <h1 className="main-page-txt">Main page</h1>
        <button onClick={handlerExit} className="exit-btn-header"><BiExit size="2em" /></button>
      </header>
      <hr />
    </div>
  );
}
