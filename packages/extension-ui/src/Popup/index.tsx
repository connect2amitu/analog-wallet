import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { AppStateProvider } from '../context';
import containers from '../context/state';

import router from './routing';

const Container = styled.div`
  padding: 10px 20px;
  height: 100vh;
`

const Popup = () => {
  return <Container>
    <AppStateProvider containers={containers}>
      <RouterProvider router={router} />
    </AppStateProvider>
  </Container>;
};

export default Popup;
