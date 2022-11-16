
import React, { useCallback } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { ThemeProps } from '../../types';
import Spinner from '../Spinner';

interface Props extends ThemeProps {
  className?: string;
  children?: React.ReactNode;
  isBusy?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  onClick?: () => void | Promise<void | boolean>;
  to?: string;
  variant?: 'contained' | 'outlined' | 'text'
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className = '', isBusy, isDisabled, onClick, to, type = "button", variant = "contained" }: Props): React.ReactElement<Props> => {

  const onClickHandler = useCallback(
    (): void => {
      if (isBusy || isDisabled) {
        return;
      }

      onClick && onClick();

      if (to) {
        window.location.hash = to;
      }
    },
    [isBusy, isDisabled, onClick, to]
  );

  var btnClass = classNames({
    [className]: true,
    'is-disabled': isDisabled || isBusy,
    'is-busy': isBusy,
    [variant]: true,

  });

  return (
    <button
      type={type}
      className={btnClass}
      disabled={isDisabled || isBusy}
      onClick={onClickHandler}
    >
      <div className='children'>{children}</div>
    </button>
  );
}

export default styled(Button)(({ isDanger, isDisabled, theme }: Props) => `
  background: ${isDanger ? theme.buttonBackgroundDanger : theme.primaryColor};
  opacity: ${isDisabled ? 0.1 : 1};
  cursor: pointer;
  display: block;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: none;
  border-radius: ${theme.borderRadius};
  color: ${theme.buttonTextColor};
  font-size: 16px;
  line-height: 26px;
  padding: 0 21px;
  position: relative;
  text-align: center;

  .children {
    font-family: ${theme.fontFamily};
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100%;
  }

  &:disabled {
    cursor: default;
  }

  &.contained {  
    /* border: 1px solid ${theme.borderColor}; */
    background: ${theme.primaryColor};
    color: ${theme.buttonTextColor};
  }
  &.outlined {  
    border: 1px solid #2406E2;
    background: #fff;
    color: #2406E2;
  }
  &.text {  
    border: 1px solid transparent;
    background: transparent;
    color: #2406E2;
  }
`);
