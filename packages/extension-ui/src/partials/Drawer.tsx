import React from 'react'
import styled from 'styled-components';

import { getLogoByNetworkKey } from '../shared/functions';
import ModalHeader from './ModalHeader';

const DrawerContainer = styled.div`
  height: 100vh;
  background: ${`url(${getLogoByNetworkKey("background")})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

const Body = styled.div`
  max-height: 100vh;
  overflow: auto;
`;

interface Props {
  children: React.ReactNode,
  className?: string,
  title: string,
  onClose?: () => void;
  onBack?: () => void;
}

const Drawer = ({ children, className, title, onClose, onBack }: Props) => {
  return (
    <DrawerContainer className={className}>
      <Body>
        {title && <ModalHeader title={title} onClose={onClose} onBack={onBack} />}
        {children}
      </Body>
    </DrawerContainer>
  )
}

export default Drawer