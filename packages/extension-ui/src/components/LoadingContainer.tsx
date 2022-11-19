import React from 'react';
import styled from 'styled-components';
import LoaderComponent from './Loader';

interface Props {
  children?: React.ReactNode
  className?: string;
}

function LoadingContainer({ children, className }: Props): React.ReactElement<Props> {
  if (!children) {
    return (
      <LoaderComponent className={className} />
    );
  }

  return (
    <>{children}</>
  );
}

export default styled(LoadingContainer)`
  position: relative;
  height: 100%;

  .loading-img {
    width: 120px;
    height: 120px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .svg {
      width: 100%;
    }
  }
`;
