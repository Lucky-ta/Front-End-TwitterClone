import { BiPencil } from 'react-icons/bi';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

export function AddTweetBtn() {
  return (
    <div>
      <Link to="/home/NewTweet">
        <button className="add-tweet-btn"><BiPencil size="5em" /></button>
      </Link>
    </div>
  );
}
