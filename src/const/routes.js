import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';

export const ROUTES = [
  { path: '/', Element: Home, props: {} },
  { path: '/signIn', Element: SignIn, props: {} },
  { path: '/signUp', Element: SignUp, props: {} },
];
