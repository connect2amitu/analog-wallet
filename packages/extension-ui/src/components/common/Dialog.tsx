import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactElement;
  onClose: () => void | undefined;
  className?: string;
  element?: string
}
const Dialog = ({ children, onClose, className = 'root-portal', element = 'div' }: Props) => {
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
    <ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>,
    container
  );
};

export default Dialog