import { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { InvalidUser } from '../components/InvalidUser';
import { LoginField } from '../components/LoginField';
import { OptionsBar } from '../components/OptionsBar';
import { TextBox } from '../components/TextBox';
import { AuthContext } from '../contexts/AuthContext';
import '../css/HomePage.css';
import userAPI from '../services/userAPI';

export function Home() {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <InvalidUser />;
  }

  const [tweet, setTweet]: any = useState([]);
  const { reload, setAllTweets } = useContext(AuthContext);

  useEffect(() => {
    const getAllTweets = async () => {
      try {
        const data = await userAPI.allTweets();
        setTweet(data);
        setAllTweets(data);
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getAllTweets();
  }, [reload]);

  return (
    <div className="home-page">
      <div className="header-div">
        <Header title="Home page" />
      </div>
      <div className="textBox-div">
        <TextBox tweets={tweet} />
      </div>
      <div className="optionBar-div">
        <OptionsBar />
      </div>
    </div>
  );
}
