import React from 'react'
import styled from 'styled-components';

import CloseIcon from "../../assets/icons/close.svg";

const Heading = ({ onClose, title, className }: { className?: string, title: string, onClose: () => {} }) => {
  return (
    <div className={className}>
      <div className='title'>{title}</div>
      <div className='close-icon' onClick={onClose}>
        <img src={CloseIcon} alt="close-icon" height={12} width={12} />
      </div>
    </div>
  )
}

export default styled(Heading)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;

  .title{
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #0F0040;
  }
  
  .close-icon{
    position: absolute;
    right: 16px;
    top: 8px;
  }
`