import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './const/routes';

function App() {
  return (
    <Routes>
      {ROUTES.map(({ Element, path, props }, i) => (
        <Route key={i} path={path} element={<Element {...props}/>} />
      ))}
    </Routes>
  );
}

export default App;
