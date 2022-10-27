import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import router from './routing';

const Container = styled.div`
  padding: 10px 20px;
  height: 100vh;
`

const Popup = () => {
  return <Container><RouterProvider router={router} /></Container>;
};

export default Popup;
