import { BiHomeAlt } from 'react-icons/bi';

export function Header() {
  return (
    <div>
      <header className="header">
        <button className="home-btn-header"><BiHomeAlt size="2em" /></button>
        <h1 className="main-page-txt">Main page</h1>
      </header>
      <hr />
    </div>
  );
}
