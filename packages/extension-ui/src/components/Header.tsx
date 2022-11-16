import React from 'react'
import styled from 'styled-components'
import { ThemeProps } from '../types'

import BackIcon from "../assets/icons/back.svg";

interface Props {
  className?: string;
  title: string;
  subTitle: string;
  onBack?: () => void;
}

const Header = (props: Props) => {
  const { className, title, subTitle, onBack } = props;
  return (
    <div className={className}>
      <div className="subheader-container__part-1">
        <img
          onClick={onBack}
          className='icon'
          src={BackIcon}
          height={20}
          width={20}
          alt="icon"
        />
      </div>
      <div className='subheader-container__part-2'>
        <div className="subheader-container__text">{title}</div>
        <span className="subtitle">{subTitle}</span>
      </div>
      <div className='subheader-container__part-3'>
      </div>
    </div>
  )
}

export default styled(Header)(({ theme }: ThemeProps) => `
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 13px;
  .subheader-container__part-1{
    flex: 1 1 0%;
    img{
      cursor: pointer;
    }
  }
  .subheader-container__part-2{
    .subheader-container__text{
      font-weight: 600;
font-size: 14px;
line-height: 21px;
text-align: center;
color: #0F0040;
    }
  }
  .subheader-container__part-3{
    flex: 1 1 0%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .container{
    display: flex;
    align-items: center;
    flex-direction: column;

    h3{
      margin: 0;
    }
  }
`)