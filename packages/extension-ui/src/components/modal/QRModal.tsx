import React from 'react'
import classNames from 'classnames';

import Modal from './Modal';
import styled from 'styled-components';

interface WrapperProps {
  children?: JSX.Element;
  closeModal?: () => void;
  className?: string;
  closeable?: boolean;
}

const Wrapper = (props: WrapperProps) => {
  const { children, className, closeModal, closeable = true } = props;

  return (
    <Modal
      className={classNames(className, 'modal-container')}
      maskClosable={closeable}
      onClose={closeModal}
      wrapperClassName={'select-modal'}
    >
      {children}
    </Modal>
  );
};


const QRModal = ({ children, className, onClose }: any) => {
  return (
    <Wrapper className={className}
      closeModal={onClose}>
      {children}
    </Wrapper>
  )
}

export default styled(QRModal)`
 
&.modal-container {
  .select-modal{
    width: calc(100% - 32px);
    border-radius: 12px;
    .heading{
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #0F0040;
    }

    .body{
      margin-top: 14px;
      .qr-code-preview{
        width: 100%;
      }
      .guide-text{
        margin-top: 8px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #9A97A6;
      }
    }
  }
}
`