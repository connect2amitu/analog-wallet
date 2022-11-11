
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { ThemeProps } from '../../types';
import Spinner from '../Spinner';

interface Props extends ThemeProps {
  className?: string;
  children?: React.ReactNode;
  isBusy?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  inverted?: boolean;
  onClick?: () => void | Promise<void | boolean>;
  to?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className = '', isBusy, isDisabled, onClick, to, inverted = false, type = "button" }: Props): React.ReactElement<Props> => {

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

  return (
    <button
      type={type}
      className={`${className} ${(isDisabled || isBusy) ? 'is-disabled' : ''} ${isBusy ? 'is-busy' : ''} ${inverted ? 'inverted' : ""}`}
      disabled={isDisabled || isBusy}
      onClick={onClickHandler}
    >
      <div className='children'>{children}</div>
      <div className='button__disabled-overlay' />
      <Spinner className='button__busy-overlay' />
    </button>
  );
}

export default styled(Button)(({ isDanger, theme }: Props) => `
  background: ${isDanger ? theme.buttonBackgroundDanger : theme.primaryColor};
  cursor: pointer;
  display: block;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: none;
  border-radius: 56px;
  color: ${theme.buttonTextColor};
  font-size: 16px;
  line-height: 26px;
  padding: 0 21px;
  position: relative;
  text-align: center;

  .children {
    font-family: ${theme.fontFamily};
    font-weight: 500;
  }

  &:disabled {
    cursor: default;
  }

  .button__busy-overlay,
  .button__disabled-overlay {
    visibility: hidden;
  }

  .button__disabled-overlay {
    background: ${theme.overlayBackground};
    border-radius: 56px;
    opacity: 0.7;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  svg {
    margin-right: 0.3rem;
  }

  &.is-busy {
    background: rgba(96,96,96,0.15);

    .children {
      opacity: 0.25;
    }

    .button__busy-overlay {
      visibility: visible;
    }
  }
  &.inverted {  
    border: 1px solid ${theme.borderColor};
    background: ${theme.buttonTextColor};
    color: ${theme.textColor2};
  }

  &.is-disabled .button__disabled-overlay {
    visibility: visible;
  }
`);
