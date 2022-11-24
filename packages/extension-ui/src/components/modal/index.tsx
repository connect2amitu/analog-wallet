import React, { useCallback } from 'react';
import CN from 'classnames';
import styled from 'styled-components';

import type { ThemeProps } from '../../types';


interface Props {
  children: React.ReactNode;
  className?: string;
  reference?: React.RefObject<HTMLDivElement>;
  wrapperClassName?: string;
  maskClosable?: boolean;
  onClose?: () => void;
}

const Index = ({ children, className, maskClosable, onClose, reference, wrapperClassName }: Props): React.ReactElement<Props> => {
  const onClickBackdrop = useCallback(() => {
    if (maskClosable) {
      onClose && onClose();
    }
  }, [maskClosable, onClose]);

  return (
    <div
      className={className}
      ref={reference}
    >
      <div className={CN('modal', wrapperClassName)}>
        {children}
      </div>
      <div
        className='modal__backdrop'
        onClick={onClickBackdrop}
      />
    </div>
  );
}

export default styled(Index)(({ theme }: ThemeProps) => `
  .modal {
    position: fixed;
    border-radius: 12px;
    top: 10%;
    z-index: 1500;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    padding: 15px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);

    &__backdrop {
      background-color: #0F0040;
      opacity: 0.4;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1200;
    }
  }

`);
