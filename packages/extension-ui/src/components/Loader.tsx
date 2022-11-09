import React from 'react';
import styled from 'styled-components';

import LoaderIcon from '../assets/icons/loader.svg';

const Loader = styled.img`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoaderComponent = ({ height = 15, width = 15 }) => {
  return (
    <div>
      <Loader
        src={LoaderIcon}
        alt="loading"
        className="loading-icon"
        height={height}
        width={width}
      />
    </div>
  );
};

export default LoaderComponent;
