import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { AppStateProvider } from '../context';
import containers from '../context/state';
import LoadingComponent from '../components/Loading';

import router from './routing';

const Container = styled.div`
  padding: 10px 20px;
  height: 100vh;
`




const Popup = () => {
  return <Container>
    <AppStateProvider containers={containers}>
      <Suspense fallback={<LoadingComponent />}>
        <RouterProvider router={router} />
      </Suspense>
    </AppStateProvider>
  </Container>;
};

export default Popup;
