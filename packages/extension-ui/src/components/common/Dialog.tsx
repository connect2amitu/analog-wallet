import ReactDOM from 'react-dom';
import React, { useRef } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';
import styled from 'styled-components';

interface Props {
  children: React.ReactElement;
  onClose: (val: boolean) => void | undefined;
  className?: string;
  element?: string
  open?: boolean
  fullscreen?: boolean
}


const Drawer = styled.div<{ show: boolean, fullscreen: boolean }>`
  background: #ffffff;
  overflow: hidden;
  position: fixed;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  /* transition: all .5s; */
  bottom: ${(props) => props.show ? "0" : "-100%"};
  box-shadow: 0px 5px 31px -2px rgb(0 0 0 / 28%);
  height: ${({ fullscreen }) => fullscreen ? "100%" : "auto"};
  border-radius: ${({ fullscreen }) => fullscreen ? "none" : "16px 16px 0px 0px"};
`;

const Dialog = ({ children, open = false, onClose, className = 'root-portal', element = 'div', fullscreen = false }: Props) => {

  const actionsRef = useRef(null);

  useOutsideClick(actionsRef, (): void => {
    open && onClose(!open);
  });

  const el = document.createElement(element);
  el.classList.add(className);

  const [container] = React.useState(el);

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <Drawer className={className} fullscreen={fullscreen} show={open}><div ref={actionsRef}>{children}</div></Drawer>,
    container
  );
};

export default Dialog