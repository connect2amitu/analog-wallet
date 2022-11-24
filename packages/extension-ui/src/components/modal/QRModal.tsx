import React from 'react'
import classNames from 'classnames';

import Modal from '.';

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
      <div className={'QR-modal'}>
        {children}
      </div>
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

export default QRModal