import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import InvalidUser from './InvalidUser';
import OptionsBar from '../components/OptionsBar';
import TextBox from '../components/TextBox';
import { AuthContext } from '../contexts/AuthContext';
import '../css/HomePage.css';
import userAPI from '../services/userAPI';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [tweet, setTweet]: any = useState([]);
  const { reload, setAllTweets } = useContext(AuthContext);

  useEffect(() => {
    if (!user.id || !token) {
      navigate('/invalidUser');
    }
  }, [token, user]);

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
  }, [userAPI, reload]);

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
