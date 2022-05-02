import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { WelcomePage } from '../pages/WelcomePage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
