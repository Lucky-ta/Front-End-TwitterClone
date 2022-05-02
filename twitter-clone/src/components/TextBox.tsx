import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import userAPI from '../services/userAPI';

export function TextBox() {
  const token = localStorage.getItem('authToken') || '';
  const [text, setText] = useState('');
  const { tweet } = useContext(AuthContext);

  const sendTweet = async () => {
    try {
      await userAPI.tweet(text, token);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="tweet something"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={sendTweet}>Tweetar</button>
      </div>
      <div>
        {tweet.map(({ User, tweet }) => (
          <div>
            <span>{ User.name }</span>
            <p>{tweet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
