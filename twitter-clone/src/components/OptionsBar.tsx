import { useContext } from 'react';
import { BiHomeAlt, BiSearchAlt, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export function OptionsBar() {
  const { user } = useContext(AuthContext);
  
  const redirectHomePage = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="option-body-div">
      <button onClick={redirectHomePage} className="option-btn"><BiHomeAlt size="2em" /></button>
      <button className="option-btn"><BiSearchAlt size="2em" /></button>
      <Link to={`/profile/${user.id}`}>
        <button className="option-btn"><BiUser size="2em" /></button>
      </Link>
    </div>
  );
}
