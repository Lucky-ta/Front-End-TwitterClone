import { Router } from './routes/Routes';
import { MyProvider } from './contexts/MyProvider';

function App() {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
}

export default App;
