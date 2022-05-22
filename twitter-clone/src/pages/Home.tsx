import { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { InvalidUser } from '../components/InvalidUser';
import { LoginField } from '../components/LoginField';
import { OptionsBar } from '../components/OptionsBar';
import { TextBox } from '../components/TextBox';
import { AuthContext } from '../contexts/AuthContext';
import '../css/HomePage.css';

export function Home() {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <InvalidUser />;
  }

  return (
    <div className="home-page">
      <div className="header-div">
        <Header />
      </div>
      <div className="textBox-div">
        <TextBox />
      </div>
      <div className="optionBar-div">
        <OptionsBar />
      </div>
    </div>
  );
}
