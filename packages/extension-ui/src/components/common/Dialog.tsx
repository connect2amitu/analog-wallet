import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import styled from 'styled-components';

import useOutsideClick from '../../hooks/useOutsideClick';

interface Props {
  children: React.ReactElement;
  onClose?: (val: boolean) => void | undefined;
  className?: string;
  element?: string
  open?: boolean
  fullscreen?: boolean
}

const DialogBody = styled.div<{ show: boolean, fullscreen: boolean }>`
  background: #ffffff;
  overflow: hidden;
  position: fixed;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${(props) => props.show ? "0" : "-100%"};
  box-shadow: 0px 5px 31px -2px rgb(0 0 0 / 28%);
  height: ${({ fullscreen }) => fullscreen ? "100%" : "auto"};
  border-radius: ${({ fullscreen }) => fullscreen ? "0" : "16px 16px 0px 0px"}; 
`;

const Dialog = ({ children, open = false, onClose, className = 'root-portal', element = 'div', fullscreen = true }: Props) => {

  const actionsRef = useRef(null);

  useOutsideClick(actionsRef, (): void => {
    open && onClose && onClose(!open);
  });

  const el = document.createElement(element);
  el.classList.add(className);

  const [container] = React.useState(el);

  React.useEffect(() => {
    if (open) {
      document.body.appendChild(container);
    }
    return () => {
      open && document.body.removeChild(container);
    };
  }, [container, open]);

  return ReactDOM.createPortal(
    <DialogBody className={className} fullscreen={fullscreen} show={open}><div ref={actionsRef}>{children}</div></DialogBody>,
    container
  );
};

export default Dialog