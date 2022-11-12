import React from 'react';
import styled from 'styled-components';

import { ThemeProps } from '../../types';

interface Props {
  className?: string;
  label?: string;
  value?: boolean | undefined;
  onChange: (val: boolean) => void | undefined;
}

const Switch = ({ className, label = "", value = false, onChange }: Props): React.ReactElement<Props> => {
  return (
    <div className={className}>
      <label className="form-switch">
        <input type="checkbox" checked={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)} />
        <i></i> {label}
      </label>
    </div>
  );
}

export default styled(Switch)(({ theme }: ThemeProps) => `
.form-switch {
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .form-switch i {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    background-color: #e6e6e6;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
  }

  .form-switch i::before {
    content: "";
    position: absolute;
    left: 0;
    width: 36px;
    height: 20px;
    background-color: rgba(51, 51, 51, 0.2);
    border-radius: 11px;
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear;
  }

  .form-switch i::after {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
  }

  .form-switch:active i::after {
    width: 25px;
    transform: translate3d(2px, 2px, 0);
  }

  .form-switch:active input:checked+i::after {
    transform: translate3d(16px, 2px, 0);
  }

  .form-switch input {
    display: none;
  }

  .form-switch input:checked+i {
    background: ${theme.primaryColor};
  }

  .form-switch input:checked+i::before {
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
  }

  .form-switch input:checked+i::after {
    transform: translate3d(18px, 2px, 0);
  }
`);
