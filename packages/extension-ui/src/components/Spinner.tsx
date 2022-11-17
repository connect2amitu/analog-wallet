import React from 'react';
import styled from 'styled-components';

import spinnerSrc from '../assets/images/logo.png';

interface Props {
  className?: string;
  size?: 'normal';
}

function Spinner({ className = '', size = 'normal' }: Props): React.ReactElement<Props> {
  return (
    <img
      className={`${className} ${size}Size`}
      src={spinnerSrc}
      alt="spinner icon"
    />
  );
}

export default styled(Spinner)`
  bottom: 0rem;
  height: 3rem;
  left: 50%;
  margin-left: -1.5rem;
  position: absolute;
  width: 3rem;
  z-index:10
`;
