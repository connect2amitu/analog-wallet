import React from 'react';
import styled from 'styled-components';
import { getLogoByNetworkKey } from '../shared/functions';

import { ThemeProps } from '../types';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Main({ children, className }: Props): React.ReactElement<Props> {
  return (
    <main className={className}>
      {children}
    </main>
  );
}

export default styled(Main)(({ theme }: ThemeProps) => `
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2px);
  background: ${theme.background};
  color: ${theme.textColor};
  line-height: ${theme.lineHeight};
  overflow:hidden;
  width: 400px;
  margin: 0 auto;
  position:relative;

  ::before{
    content:"";
    background: ${`url(${getLogoByNetworkKey("background")})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  * {
    font-family: ${theme.fontFamily};
  }
`);
