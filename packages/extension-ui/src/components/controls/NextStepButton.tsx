import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import next from '../../assets/icons/caret-right.svg';

type Props = React.ComponentProps<typeof Button>;

const NextStepButton = ({ children, showIcon = true, ...props }: Props): React.ReactElement<Props> => {
  return (
    <Button {...props}>
      {children}
      {showIcon && <img
        alt='next'
        className='next-step-btn__arrow-right'
        src={next}
      />}
    </Button>
  );
}

export default styled(NextStepButton)`
  .next-step-btn__arrow-right {
    position: absolute;
    margin: auto 0;
    top: 0;
    bottom: 0;
    right: 19px;
  }
`;
