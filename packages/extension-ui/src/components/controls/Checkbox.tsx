import React, { useCallback } from 'react';
import styled from 'styled-components';

import { ThemeProps } from '../../types';

import Checkmark from '../../assets/icons/checkmark.svg';

interface Props {
  checked: boolean;
  className?: string;
  label: any;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
}

function Checkbox({ checked, className, label, onChange, onClick }: Props): React.ReactElement<Props> {
  const _onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.checked),
    [onChange]
  );

  const _onClick = useCallback(
    () => onClick && onClick(),
    [onClick]
  );

  return (
    <div className={className}>
      <label>
        <input
          checked={checked}
          onChange={_onChange}
          onClick={_onClick}
          type='checkbox'
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default styled(Checkbox)(({ theme }: ThemeProps) => `
  margin: ${theme.boxMargin};

  label {
    display: flex;
cursor: pointer;
    span{
      font-weight: 400;
font-size: 12px;
line-height: 18px;
color: rgba(51, 51, 51, 0.6);
margin-left: 8px;
user-select: none;
    }
    & input {
cursor: pointer;

      -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--form-background);
    margin: 0;
    font: inherit;
    color: #333333;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

      :before{
        content: "";
        width: 12px;
    height: 11px;
    -webkit-clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: CanvasText;
  }
  
  :checked::before {
    transform: scale(1);
    background-color: #fff;
}

:checked{
  background: #333333;
}
    }

  }
`);
