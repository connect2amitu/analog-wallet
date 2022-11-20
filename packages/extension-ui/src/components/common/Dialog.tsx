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
}


const Drawer = styled.div<{ show: boolean }>`
  border-radius: 20px 20px 0 0;
  background: #ffffff;
  border: 1px solid rgba(245, 245, 255, 0.2);
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  position: fixed;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  transition: all .5s;
  bottom: ${(props) => props.show ? "0" : "-100%"};
  box-shadow: 0px 5px 31px -2px rgb(0 0 0 / 28%);
`;

const Dialog = ({ children, open = false, onClose, className = 'root-portal', element = 'div' }: Props) => {

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
    <Drawer show={open}><div ref={actionsRef}>{children}</div></Drawer>,
    container
  );
};

export default Dialog