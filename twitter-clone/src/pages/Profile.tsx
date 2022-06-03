import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import InvalidUser from './InvalidUser';
import OptionsBar from '../components/OptionsBar';
import TextBox from '../components/TextBox';
import { AuthContext } from '../contexts/AuthContext';
import userAPI from '../services/userAPI';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '');
  const token = localStorage.getItem('token');

  const [tweet, setTweet]: any = useState([]);
  const { reload } = useContext(AuthContext);


  useEffect(() => {
    if (token !== user.token) {
      navigate('/invalidUser');      
    }
  }, [token]);


  useEffect(() => {
    const getAllTweets = async () => {
      try {
        const data = await userAPI.allTweets();
        const userTweets = data.filter(({ userId }: any) => userId === user.user.id);
        setTweet(userTweets);
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getAllTweets();
  }, [reload]);

  return (
    <div className="home-page">
      <div className="header-div">
        <Header title="Profile Page" />
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
