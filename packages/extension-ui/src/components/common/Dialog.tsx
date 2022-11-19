import ReactDOM from 'react-dom';
import React, { useRef } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';

interface Props {
  children: React.ReactElement;
  onClose: (val: boolean) => void | undefined;
  className?: string;
  element?: string
  open?: boolean
}
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
    <div ref={actionsRef}>{children}</div>,
    container
  );
};

export default Dialog