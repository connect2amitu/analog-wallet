import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';

const ImportSeed = lazy(() => import('./ImportSeed'));
const RestoreJson = lazy(() => import('./RestoreJson'));
const NewAccount = lazy(() => import('./NewAccount'));
const Components = lazy(() => import('./Components'));
const Welcome = lazy(() => import('./Welcome'));
const ImportPrivateKey = lazy(() => import('./ImportPrivateKey'));

const router = createHashRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/account/create',
    element: <NewAccount />
  },
  {
    path: '/account/import-seed',
    element: <ImportSeed />,
  },
  {
    path: '/account/import-metamask-private-key',
    element: <ImportPrivateKey />,
  },
  {
    path: '/account/restore-json',
    element: <RestoreJson />,
  },
  {
    path: '/components',
    element: <Components />,
  },
]);


export default router