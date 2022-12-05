import React from 'react'
import styled from 'styled-components';

import DirectionRightIcon from "../assets/icons/direction-right.svg"
import { ThemeProps } from '../types';

interface Props extends ThemeProps {
  className?: string;
  icon: string;
  title: string;
  subTitle?: string;
  onClick?: () => void;
  onAction?: () => void;
  actionIcon?: string
}

const Menu = ({ className, icon, title, subTitle = "", onClick, onAction, actionIcon = DirectionRightIcon }: Props) => {
  return <div className={className} onClick={onClick}>
    <div className='left'>
      <div className='avatar icon'>
        <img src={icon} alt="avatar" height={24} width={24} />
      </div>
      <div className='text'>
        <p className='title'>{title}</p>
        <p className='sub-title'>{subTitle}</p>
      </div>
    </div>
    <img className='right-icon' src={actionIcon} alt="right-icon" height={16} width={16} onClick={onAction} />
  </div>
}

export default styled(Menu)(({ onClick }: Props) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
  padding: 8px 12px 8px 8px;
  border-radius: 12px;
  background: #FFFFFF;
  cursor: ${onClick ? "pointer" : "default"};

  &:first-of-type{
    margin-top: 0;
  }

  .left{
    display: flex;
    align-items: center;

    .icon{
      border-radius: 10px;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }

    .avatar{
      background: #7979f733;

      img{
        width: 100%;
        height: 100%;
      }
    }

    .remove-icon{
      background: #fa958933;
    }

    .text{
      margin-left: 9px;
      .title{
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #0F0040;
        text-align: left;
      }
      .sub-title{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #746B92;
      }
    }
  }

  .right-icon{
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
`)