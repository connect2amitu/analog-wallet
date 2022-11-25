import React from 'react'
import styled from 'styled-components';

import CloseIcon from "../assets/icons/close.svg";

interface Props {
  className?: string;
  title: string;
  onClose: () => void
}


const ModalHeader = ({ onClose, title, className }: Props) => {
  return (
    <div className={className}>
      <div className='title'>{title}</div>
      <div className='close-icon' onClick={onClose}>
        <img src={CloseIcon} alt="close-icon" height={15} width={15} />
      </div>
    </div>
  )
}

export default styled(ModalHeader)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .title{
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #0F0040;
  }
  
  .close-icon{
    position: absolute;
    right: 0px;
    top: 5px;
    cursor: pointer;
  }
`