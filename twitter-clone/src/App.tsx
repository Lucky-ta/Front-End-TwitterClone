import { Router } from './routes/Routes';
import { AuthProvider } from './contexts/MyProvider';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
