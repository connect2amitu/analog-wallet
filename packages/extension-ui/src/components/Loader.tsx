import React from 'react';
import styled from 'styled-components';

import LoaderIcon from '../assets/icons/circular-loader.png';

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

const LoaderComponent = ({ height = 15, width = 15, show = false, className = "" }) => {
  return (
    <>
      {show && <Loader
        className={`loading-icon ${className}`}
        src={LoaderIcon}
        alt="loading"
        height={height}
        width={width}
      />}
    </>
  );
};

export default LoaderComponent;
