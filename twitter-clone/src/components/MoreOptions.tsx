import React, { useContext } from 'react';
import { BiTrash } from 'react-icons/bi';
import { AuthContext } from '../contexts/AuthContext';
import '../css/MoreOptions.css';
import userAPI from '../services/userAPI';

export default function MoreOptions({ tweetId }: any) {
  const token = localStorage.getItem('token') || '';
  const { reload, setReload } = useContext(AuthContext);

  const excludeTweet = async () => {
    await userAPI.deleteTweet(tweetId, token);
    await setReload(!reload);
  };

  return (
    <div>
      <div className="dropdown-container" tabIndex={-1}>
        <div className="three-dots" />
        <div className="dropdown">
          <a onClick={excludeTweet}>
            <div>
              <BiTrash size="1em" />
              {' '}
              Excluir
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
