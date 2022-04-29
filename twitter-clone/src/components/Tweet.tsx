import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function Tweet() {
  const { tweet } = useContext(AuthContext);

  return (
    <div>
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
