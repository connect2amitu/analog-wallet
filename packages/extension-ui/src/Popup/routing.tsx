import { createHashRouter } from 'react-router-dom';

import About from './About';
import Counter from './Counter';
import Dashboard from './Dashboard';
import Home from './Home';
import Users from './Users';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
]);


export default router