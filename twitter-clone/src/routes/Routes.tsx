import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';

import Home from '../pages/Home';
import NewTweet from '../pages/NewTweet';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import WelcomePage from '../pages/WelcomePage';
import InvalidUser from '../pages/InvalidUser';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/NewTweet" element={<NewTweet />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/invalidUser" element={<InvalidUser />} />
      </Routes>
    </BrowserRouter>
  );
}
