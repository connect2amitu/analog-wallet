import React from 'react';
import styled from 'styled-components';

const TextBox = ({ className, id = "", label, ...rest }: any) => {

  return (
    <div className={className}>
      <input
        autoComplete="off"
        role="presentation"
        placeholder=" "
        {...rest}
      />
      <label className="field-placeholder" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default styled(TextBox)`
  position: relative;
  height: 50px;
  padding: 0 12px;
  border-radius: 56px;
  border:1px solid transparent;
  background: rgba(51, 51, 51, 0.1);
  color: rgba(255, 255, 255, 0.8);
  width: auto;
  overflow: hidden;

  input{
    border: none;
    padding-top: 15px;
    font-size: 16px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    bottom: 0px;
    height: 100%;

    color: #333333;
    background: transparent;
    padding-left: 0;

    &:focus {
      outline: none;
    }
    &:focus,
    &:not(:placeholder-shown) {
      border-color: transparent;
      margin: 0px 0 0 5px;
      ~ label {
        //Come up with a calculation for this
        top: calc(30% - 12px);
        transform: translate(5px, 0%);
        transition: all 0.2s;
        font-weight: 400;
        font-size: 12px;
        color: rgba(51, 51, 51, 0.6);
      }
    }

    &::-webkit-input-placeholder {
      color: transparent;
    }
    &::-moz-placeholder {
      color: transparent;
    }
    &:-ms-input-placeholder {
      color: transparent;
    }
  }

  label{
    position: absolute;
    top: 50%;
    transform: translate(5px, -50%);
    pointer-events: none;
    transition: all 0.14s ease-in-out;
    font-size: 1rem;
    color: rgba(51, 51, 51, 0.6);
  }
`;
