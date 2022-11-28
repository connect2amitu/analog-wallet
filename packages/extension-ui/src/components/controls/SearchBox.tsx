import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@analog/extension-ui/types';
import SearchIcon from "../../assets/icons/search.svg";
import CloseIcon from "../../assets/icons/close-gray.svg";


interface Props extends ThemeProps {
  name: string;
  type?: "text" | "password";
  className?: string;
  value?: string;
  placeholder?: string;
  clearable?: boolean;
  actionIcon?: string;
  onChange?: (val: string) => void | undefined;
  onActionClick?: () => void | undefined;
}

const SearchBox = (props: Props) => {
  const { name, className, value = "", onChange, type = "text", placeholder = "", clearable = true, actionIcon = CloseIcon, onActionClick } = props;

  return (
    <div className={className}>
      <div className="search-input">
        <img src={SearchIcon} alt="search-icon" className="search-icon" />
        <input
          className="search"
          autoComplete="off"
          placeholder={placeholder}
          name={name}
          value={value}
          type={type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value)} />
        {clearable && <div className='action-icon' onClick={onActionClick}>
          <img src={actionIcon} alt="action-icon" className="icon" />
        </div>}
      </div>
    </div>
  );
};

export default styled(SearchBox)(({ clearable }: Props) => `
  height: auto;
  margin-top: 10px;

  .search-input {
    position: relative;
    border-radius: 10px;
    height: 36px;
    width: 100%;
    cursor: pointer;

    .search-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .action-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      height: 16px;
      width: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F2F0F5;
      border-radius: 50%;
      padding: 10px;
      img{
      }
    }
    .search {
      height: 100%;
      width: 100%;
      padding-left: 35px; 
      font-size: 12px;
      outline: none;
      width: 100%;
      background: #FFFFFF; 
      color: #0F0040;
      padding-right: ${clearable ? "40px" : "10px"};
      background: #FFFFFF;
      border: 1px solid rgba(15, 0, 64, 0.08);
      box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.07);
      border-radius: 10px;
    }
  }
`);
