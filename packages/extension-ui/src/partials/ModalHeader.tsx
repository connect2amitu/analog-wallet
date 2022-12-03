import React from 'react'
import styled from 'styled-components';

import CloseIcon from "../assets/icons/close.svg";
import BackIcon from "../assets/icons/back.svg";

interface Props {
  className?: string;
  title: string;
  onClose?: () => void
  onBack?: () => void
}

const ModalHeader = ({ title, className, onClose, onBack }: Props) => {
  return (
    <div className={className}>
      {onBack && <div className='back-icon' onClick={onBack}>
        <img src={BackIcon} alt="back-icon" height={15} width={15} />
      </div>}

      <div className='title'>{title}</div>
      {onClose && <div className='close-icon' onClick={onClose}>
        <img src={CloseIcon} alt="close-icon" height={15} width={15} />
      </div>}
    </div>
  )
}

export default styled(ModalHeader)`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  .title{
    font-weight: 600;
    font-size: 16px;
    color: #0F0040;
  }
  
  .close-icon{
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }

  .back-icon{
    position: absolute;
    left: 16px;
    top: 16px;
    cursor: pointer;
  }
`