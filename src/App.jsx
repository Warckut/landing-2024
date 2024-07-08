import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

const routes = [
  { path: '/', element: Home },
  { path: '/signIn', element: SignIn },
  { path: '/signUp', element: SignUp },
];

function App() {
  return (
    <Routes>
      {routes.map((props) => (
        <Route {...props} />
      ))}
    </Routes>
  );
}

export default App;
