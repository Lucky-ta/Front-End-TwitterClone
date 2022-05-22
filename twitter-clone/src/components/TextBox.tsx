import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import userAPI from '../services/userAPI';

export function TextBox() {
  const token = localStorage.getItem('authToken') || '';
  const [text, setText] = useState('');
  const { tweet } = useContext(AuthContext);

  // const sendTweet = async () => {
  //   try {
  //     await userAPI.tweet(text, token);
  //   } catch (e: any) {
  //     console.log(e.message);
  //   }
  // };

  return (
      <div className='textbox-body-container'>
        {tweet.map(({ User, tweet }) => (
            <div className='tweets-container'>
              <div className='tweets'>
                <p>{ User.name }</p>
                <p className='tweet-text'>{tweet}</p>
                </div>
                <hr />
            </div>
        ))}
      </div>
  );
}
