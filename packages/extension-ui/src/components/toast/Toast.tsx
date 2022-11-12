
import React from 'react';
import styled from 'styled-components';

import { ThemeProps } from '@analog/extension-ui/types';

interface Props {
  content: React.ReactChild;
  className?: string;
}

function Toast({ className, content }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      <span>{content}</span>
    </div>
  );
}

export default styled(Toast) <{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }): string => visible ? 'block' : 'none'};
  text-align: center;
  vertical-align: middle;
  line-height: 7px;
  top: 69px;
  left: calc(50% - 50px);
  color: #0E0A0A;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 12px;
  margin: auto;
  background: ${({ theme }: ThemeProps): string => theme.highlightedAreaBackground};
  span{
    color: #333333;
    font-size: 14px;
  }
`;
