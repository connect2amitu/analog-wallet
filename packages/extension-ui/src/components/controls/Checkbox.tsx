import React from 'react';
import styled from 'styled-components';
import { Controller } from "react-hook-form";
import { get } from 'lodash'
import { ThemeProps } from '../../types';

interface Props {
  label: React.ReactNode | string;
  control?: any;
  errors?: any;
  name: string;
  className?: string;
  value?: string | boolean;
  onChange?: (val: boolean) => void;
}

const Checkbox = (props: Props) => {
  const { label = "", name, control, errors, className, value, onChange = () => { } } = props;

  return (
    <div className={className}>
      <label className={`${get(errors, `${name}.message`) ? "error" : ""}`}>
        {
          control ?

            <Controller
              render={({ field }) =>
                <input {...field} type={"checkbox"}
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />}
              name={name}
              control={control}
              defaultValue={false}
            /> : <input type={"checkbox"}
              checked={Boolean(value)}
              onChange={(e: any) => onChange(e.target.checked)}
            />
        }
        <div className='label-error-text'>
          <span>{label}</span>
          {get(errors, `${name}.message`) && <span className='error-message'>
            {get(errors, `${name}.message`, "")}
          </span>}
        </div>
      </label>

    </div>
  );
};

export default styled(Checkbox)(({ theme }: ThemeProps) => `
label {
  display: flex;
  cursor: pointer;
input{
  border:1px solid transparent;
}
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
     background: ${theme.primaryColor};
    }
  }
&.error{
  input{
    border-color: rgb(244, 67, 54);
  }
}

.label-error-text{
  display:flex;
flex-direction:column;
}
}

.error-message{
  color: rgb(244, 67, 54);
    font-size: 12px;
  }
`);