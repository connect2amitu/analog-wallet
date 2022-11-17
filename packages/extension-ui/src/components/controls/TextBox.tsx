import React from 'react';
import styled from 'styled-components';
import { Controller } from "react-hook-form";
import { get } from 'lodash'
import { ThemeProps } from '@analog/extension-ui/types';

interface Props {
  label: string;
  control?: any;
  errors?: any;
  name: string;
  type: "text" | "password";
  className?: string;
  value?: string;
  onChange?: (val: string) => void | undefined;
}

const TextBox = (props: Props) => {
  const { label = "", name, control, errors, className, value = "", onChange, type = "text" } = props;

  return (
    <div className={className}>
      <div className={`container ${get(errors, `${name}.message`) ? "error" : ""}`}>
        {
          control ?
            <Controller
              render={({ field }) => <input {...field} type={type} autoComplete="off" placeholder=" " />}
              name={name}
              control={control}
              defaultValue=""
            /> : <input autoComplete="off" placeholder=" " name={name} defaultValue={value} type={type} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)} />
        }
        <label className="field-placeholder" > {label} </label>
      </div>
      {get(errors, `${name}.message`) &&
        <span className='error-message'>
          {get(errors, `${name}.message`, "")}
        </span>
      }
    </div>
  );
};

export default styled(TextBox)(({ theme }: ThemeProps) => `
height: auto;
margin-top: 10px;

.container{
  position: relative;
    height: 50px;
    /* padding: 0 12px; */
    border-radius: 12px;
    border: 1px solid transparent;
    /* background: rgba(51,51,51,0.1); */
    color: rgba(255,255,255,0.8);
    width: auto;

  &.error{
    border-color: rgb(244, 67, 54);
  }

  input{
    border: none;
    padding-top: 15px;
    font-size: 16px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    bottom: 0px;
    height: 100%;
    /* background: rgba(51,51,51,0.1); */
    color: #333333;
    padding-left: 16px;
    border-radius: 12px;
    border: 1px solid rgba(15, 0, 64, 0.08);

    &:focus,
    &:not(:placeholder-shown) {
      outline: none;
      /* border-color: transparent; */
      ~ label {
        //Come up with a calculation for this
        top: calc(30% - 12px);
        left: 12px;
        transform: translate(5px, 0%);
        transition: all 0.2s;
        font-weight: 400;
        font-size: 12px;
        color: rgba(51, 51, 51, 0.6);
      }
    }
  }

  label{
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(5px, -50%);
    pointer-events: none;
    transition: all 0.14s ease-in-out;
    font-size: 1rem;
    color: rgba(51, 51, 51, 0.6);
  }
}

.error-message{
  color: rgb(244, 67, 54);
    padding-left: 19px;
    font-size: 12px;
}
`);
