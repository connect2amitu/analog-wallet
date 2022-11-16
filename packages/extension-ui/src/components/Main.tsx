import React from 'react';
import styled from 'styled-components';

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
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  overflow:hidden;
  width: 460px;
  margin: 0 auto;

  * {
    font-family: ${theme.fontFamily};
  }
`);
