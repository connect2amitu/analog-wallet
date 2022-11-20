import classNames from 'classnames';
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

const LoaderComponent = ({ height = 15, width = 15, show = false, className = "", full = false }) => {
  return (
    <div className={classNames({
      [className]: true,
      "full-screen": full,
    })}>
      {show && <Loader
        className="loader"
        src={LoaderIcon}
        alt="loading"
        height={height}
        width={width}
      />}
    </div>
  );
};

export default styled(LoaderComponent)`
&.full-screen{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
