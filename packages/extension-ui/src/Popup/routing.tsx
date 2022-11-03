import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';

const About = lazy(() => import('./About'));
const Counter = lazy(() => import('./Counter'));
const Dashboard = lazy(() => import('./Dashboard'));
const Home = lazy(() => import('./Home'));
const Users = lazy(() => import('./Users'));

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