import { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { InvalidUser } from '../components/InvalidUser';
import { LoginField } from '../components/LoginField';
import { OptionsBar } from '../components/OptionsBar';
import { TextBox } from '../components/TextBox';
import { Tweet } from '../components/Tweet';
import { AuthContext } from '../contexts/AuthContext';

export function Home() {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <InvalidUser />;
  }

  return (
    <div>
      <Header />
      <OptionsBar />
      <TextBox />
      <h2>
        bem vindo,
        {auth.user.name}
        !
      </h2>
      <Tweet />
    </div>
  );
}
