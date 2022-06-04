import { BiHomeAlt, BiUser } from 'react-icons/bi';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OptionsBar() {
  const user = JSON.parse(localStorage.getItem('user') || '');

  const redirectHomePage = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="option-body-div">
      <button onClick={redirectHomePage} className="option-btn"><BiHomeAlt size="2em" /></button>
      <Link to={`/profile/${user.id}`}>
        <button className="option-btn"><BiUser size="2em" /></button>
      </Link>
    </div>
  );
}
