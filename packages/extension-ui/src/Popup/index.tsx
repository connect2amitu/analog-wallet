import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppStateProvider } from '../context';
import containers from '../context/state';
import { ScreenLoader } from '../components';

import router from './routing';

const Popup = () => {
  return <React.Fragment>
    <AppStateProvider containers={containers}>
      <Suspense fallback={<ScreenLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </AppStateProvider>
  </React.Fragment>;
};

export default Popup;
