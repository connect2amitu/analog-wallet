import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@analog/extension-ui/types';
import SearchIcon from "../../assets/icons/search.svg";


interface Props {
  name: string;
  type: "text" | "password";
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (val: any) => void | undefined;
}

const SearchBox = (props: Props) => {
  const { name, className, value = "", onChange, type = "text", placeholder = "" } = props;

  return (
    <div className={className}>
      <div className="search-input">
        {/* <img src={SearchIcon} alt="search-icon" className="search-icon" /> */}
        <input
          className="search"
          autoComplete="off"
          placeholder={placeholder}
          name={name}
          defaultValue={value}
          type={type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)} />
      </div>
    </div>
  );
};

export default styled(SearchBox)(({ theme }: ThemeProps) => `
  height: auto;
  margin-top: 10px;

  .search-input {
    position: relative;
    .search-icon {
      padding: 9px 12px;
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
    }
    .search {
      font-weight: 400;
    padding: 9px 0;
      font-size: 12px;
      line-height: 18px;
      color: #0F0040;
      backdrop-filter: blur(9px);
      border-radius: 10px;
      outline: none;
      /* width: calc(100% - 70px); */
      width: 100%;
      background: #FFFFFF;
      border: 1px solid rgba(15, 0, 64, 0.08);
      box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.07);
    }
  }
`);
