import { BiPencil } from 'react-icons/bi';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTweetBtn() {
  return (
    <div>
      <Link to="/home/NewTweet">
        <button className="add-tweet-btn"><BiPencil size="5em" /></button>
      </Link>
    </div>
  );
}
